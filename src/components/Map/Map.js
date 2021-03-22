import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Animated from "animated/lib/targets/react-dom";
import { connect } from "react-redux";
import GameHeader from "../GameHeader/GameHeader";
import Card from "../Card/Card";
import games from "../../games.json";
import names from "../../names.json";
import "./Map.css";
import Overlay from "../Overlay/Overlay";
import incrementCounter from "../../actions/incrementCounter";
import resetCounter from "../../actions/resetCounter";
// Play environmental audio:
// import React in our code
import UIfx from 'uifx';
import Draggable from 'react-draggable'; // The default

import win from '../../winner.mp3';
import wrong from '../../wrong.mp3';
import finished from '../../finished.mp3';
import drop from '../../ablegen.mp3';

import worldmap from "../../pictures/weltkarte.png";


const AnimatedCard = Animated.createAnimatedComponent(Card);

const winSound = new UIfx(win);

const finishedSound = new UIfx(finished);

const dropSound = new UIfx(drop,{
    volume: 0.05, // number between 0.0 ~ 1.0
});

const wrongSound = new UIfx(wrong,
    {
        volume: 0.6, // number between 0.0 ~ 1.0
    });

const widthValue = screen.width * 0.6;
const fruitSize = screen.width * 0.03;
const mapWidth = {
    'width': widthValue
    //define other properties here, use camel case(remember we are using Javascript)
}

class Map extends Component {
    constructor(props) {
        super(props);
        this.mapSize = React.createRef();

        this.setOverlay = this.setOverlay.bind(this);
        this.state = {
            activeDrags: 0,
            position: [],
            cards: [],
            found: [],
            explanatorycards: [],
            flippedCards: [],
            dealCards: [],
            scaleCards: [],
            rotateCards: [],
            locked: false,
            status: "stopped",
            overlay: true,
            buttonName: "Los gehts!",
            sound: null,
            image: null,
            explanation: [{ title: 'Spielregeln', text: 'Erinnerst du dich, wo die Früchte herstammen? Bewege die Frucht auf ihr Ursprungsland!' }],
        };
    }



    componentDidMount() {
        this.resetGame();
    }

    resetGame() {
        window.scrollTo(0, 0);

        const difficulty = this.props.difficulty;

        // find all card-types of the selected level
        const selectedLevel = games.find(game => game.difficulty === difficulty);
        const retrievedWidth = this.mapSize.current.offsetWidth;
        const retrievedX = this.mapSize.current.offsetLeft;
        const retrievedY = this.mapSize.current.offsetTop;
        const retrievedHeight = this.mapSize.current.offsetHeight;
        console.log(retrievedWidth, retrievedHeight, retrievedX, widthValue);
        let positions = [];
        let counter = 0;
        for (let card in selectedLevel.cards) {
            counter++;
            let cardValue = selectedLevel.cards[card];

            const currentValue = names.find(element => element.name === cardValue);
            positions.push({ x: 0, y: 0, draggable: true, left: retrievedX + retrievedWidth * currentValue.mapX /100, top: retrievedY + retrievedHeight * currentValue.mapY /100, picture: currentValue.image_paths[0] });
        }

        this.setState({
            position: positions,
        });

        
        this.props.resetCounter();
    }


    handleDrag = (e, ui, i) => {
        // 1. Make a shallow copy of the items
        let positions = [...this.state.position];
        // 2. Make a shallow copy of the item you want to mutate
        let position = { ...positions[i] };
        // 3. Replace the property you're intested in
        position.x = e.x + window.pageXOffset;
        position.y = e.y + window.pageYOffset;
        position.draggable = true;
        position.top = position.top,
            position.left = position.left,
            // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
            positions[i] = position;
        // 5. Set the state to our new copy
        this.setState({
            position: positions,
        });
    };



    /**
 * Method-Call for showing/hidding the overlay
 * @param {boolean} toDisplay - if true, overlay is rendered
 * @param {string} explanation  - explanationText
 * @param {URL} img - image which is shown over the text (can be null)
 */
    setOverlay(toDisplay, explanation, img, buttonName, sound) {
        this.setState({
            overlay: toDisplay,
            explanation: explanation,
            image: img,
            buttonName: buttonName,
            sound: sound,
        });
    }


    onStart = () => {
        this.setState({ activeDrags: ++this.state.activeDrags });
    };

    checkBorders(id) {
        const position = this.state.position;
        for (let i=0; i < position.length; i++) {
            let insight = this.checkBorder(fruitSize, position[i].left, position[i].top, position[id].x, position[id].y);

            if (insight && id == i)
                return 1;
            else if(insight)
                return -1;
        }
        return 0;
    }

    checkBorder = (size, left, top, x, y) => {
        if (x >= left && x <= left + size && y >= top && y <= top + size)
            return true;
        else
            return false;
    }

    checkFinished(positions) {
        if (positions.filter(e => e.draggable === true).length > 0) {
            console.log(positions.filter(e => e.draggable === true));
            console.log(positions.filter(e => e.draggable === true).length)
            return false;
        }
        else {
            console.log(positions.filter(e => e.draggable === true));
            return true;
        }
    }

    onStop = (e, ui, i) => {
        this.setState({ activeDrags: --this.state.activeDrags });

        if (this.checkBorders(i) == 1) {
            // 1. Make a shallow copy of the items
            let positions = [...this.state.position];
            // 2. Make a shallow copy of the item you want to mutate
            let position = { ...positions[i] };
            // 3. Replace the property you're intested in
            position.x = position.x;
            position.y = position.y;
            position.draggable = false;
            position.top = position.top,
                position.left = position.left,
                // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
                positions[i] = position;
            // 5. Set the state to our new copy
            this.setState({
                position: positions,

            });
            winSound.play();
            this.props.incrementCounter();

            if (this.checkFinished(positions)) {
                finishedSound.play();
                this.props.history.push(`/finished/${this.props.difficulty}/explanation`);
            }
        } else if (this.checkBorders(i) == -1) {
            this.props.incrementCounter();
            wrongSound.play();
        } else {
            dropSound.play();
        }
    };

    render() {
        const reference = this;
        const { position, cards } = this.state;
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        return (
            <React.Fragment>

                <GameHeader difficulty={this.props.difficulty} gameStatus={this.state.status} counter={this.props.counter} onReset={() => location.reload() } />
                <Overlay display={this.state.overlay} explanation={this.state.explanation} image={this.state.image} buttonName={this.state.buttonName} stop={() => this.setOverlay(false, [], null, "")}></Overlay>

                <div className="content">
                    {
                        this.state.position.map(function (d, idx) {
                            return (
                                <div key={idx} className="fruit" style={{ display: position[idx].draggable ? "block" : "none", width: fruitSize, height: fruitSize, backgroundColor: "white", position: "absolute", top: position[idx].top, left: position[idx].left }}></div>
                            )
                        })}


                    <div className="game">
                        <img src={worldmap} ref={reference.mapSize} style={mapWidth}></img>
                        {
                            this.state.position.map(function (d, idx) {
                                return (
                                    <Draggable key={idx} onDrag={(e, ui) => reference.handleDrag(e, ui, idx)} onStart={() => position[idx].draggable ? reference.onStart : false} onStop={(e, ui) => reference.onStop(e, ui, idx)}>
                                        <div className="box" style={{ position: "absolute", top:reference.mapSize.current.offsetTop+ 80*idx, left: reference.mapSize.current.offsetLeft -100 }}>
                                            <img src={window.location.origin + position[idx].picture} style={{ width: fruitSize, height: fruitSize }}></img>
                                        </div>
                                    </Draggable>
                                )
                            })}



                    </div>


                </div>
            </React.Fragment>
        );
    }
}

Map.propTypes = {
    difficulty: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
    incrementCounter: PropTypes.func,
    resetCounter: PropTypes.func
};

const mapStateToProps = state => ({ counter: state.counter });

const mapDispatchToProps = dispatch => ({
    incrementCounter: () => dispatch(incrementCounter()),
    resetCounter: () => dispatch(resetCounter())
});

const MapContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);

export default MapContainer;



