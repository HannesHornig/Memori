import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Animated from "animated/lib/targets/react-dom";
import shortid from "shortid";
import { connect } from "react-redux";
import GameHeader from "../GameHeader/GameHeader";
import Card from "../Card/Card";
import games from "../../games.json";
import names from "../../names.json"
import "./Game.css";
import Overlay from "../Overlay/Overlay";
import incrementCounter from "../../actions/incrementCounter";
import resetCounter from "../../actions/resetCounter";
import parse from "html-react-parser";
// Play environmental audio:
// import React in our code
import UIfx from 'uifx';

import win from '../../winner.mp3';
import wrong from '../../wrong.mp3';
import finished from '../../finished.mp3';


const AnimatedCard = Animated.createAnimatedComponent(Card);

const winSound = new UIfx(win);

const finishedSound = new UIfx(finished);

const wrongSound = new UIfx(wrong,
    {
      volume: 0.6, // number between 0.0 ~ 1.0
    });

class Game extends Component {
    constructor(props) {
        super(props);

        this.setOverlay = this.setOverlay.bind(this);
        this.state = {
            cards: [],
            found: [],
            flippedCards: [],
            dealCards: [],
            scaleCards: [],
            rotateCards: [],
            locked: false,
            status: "stopped",
            overlay: true,
            buttonName: "x",
            sound: null,
            image: null,
            explanation: [{title:'Memory',text:'Klicke auf die Karten um sie anzusehen. Finde heraus, welche drei Karten zusammengehören.'}],
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        const difficulty = this.props.difficulty;

        // find all card-types of the selected level
        const selectedLevel = games.find(game => game.difficulty === difficulty);

        const cards = [];
        for (let card in selectedLevel.cards) {
            let cardValue = selectedLevel.cards[card];

            const currentValue = names.find(element => element.name === cardValue);

            for (let i = 0; i < 3; i++) {

                cards.push(
                    {
                        id: shortid.generate(),
                        symbol: currentValue.image_paths[i],
                        type: cardValue,
                        matched: false
                    });
                    console.log(cards[cards.length-1].id);
            }
        }

        this.resetGame();

        this.renderCards(cards);
    }



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

    renderCards(cards) {
        const randomCards = cards.sort(() => 0.5 - Math.random());

        this.setState(
            {
                cards: randomCards,
                cards: cards,
                dealCards: cards.map(() => new Animated.Value(0)),
                scaleCards: cards.map(() => new Animated.Value(1)),
                rotateCards: cards.map(() => new Animated.Value(0))
            },
            () => {
                Animated.stagger(100, this.state.dealCards.map(anim => Animated.spring(anim, { toValue: 1, speed: 14 }))).start();
            }
        );
    }


    checkMatches(cardIndex) {
        if (this.state.status !== "started") {
            this.setState({ status: "started" });
        }


        const flippedCards = this.state.flippedCards.slice();

        if (this.state.locked || flippedCards.includes(cardIndex)) {
            return;
        }





        const numCardsToMatch = 3;
        const cards = this.state.cards.slice();

        flippedCards.push(cardIndex);

        this.setState({ locked: true });
        this.flipCard(cardIndex, "forward").start();

        if (flippedCards.length > 1) {
            const allFlippedCardsMatch = flippedCards.every(flippedCardIndex => cards[cardIndex].type === cards[flippedCardIndex].type);

            if (allFlippedCardsMatch) {
                if (flippedCards.length === numCardsToMatch) {
                    flippedCards.forEach(flippedCardIndex => {
                        cards[flippedCardIndex].matched = true;
                    });

                    
                    winSound.play();
                    this.state.found.push(names.find(element => element.name === cards[flippedCards[0]].type));
                    this.props.incrementCounter();
                    Animated.sequence([
                        Animated.delay(1000),
                        Animated.parallel(
                            this.state.scaleCards
                                .filter((anim, index) => flippedCards.includes(index))
                                .map(anim => Animated.spring(anim, { toValue: 0 }))
                        )
                    ]).start(() => {
                        const countMatched = cards.reduce((count, card) => count + card.matched, 0);

                        if (cards.length === countMatched && cards.length > 0) {
                            finishedSound.play();
                            this.setState({ status: "stopped" });
                            this.props.history.push(`/finished/${this.props.difficulty}/explanation`);
                        } else {
                            this.setState({
                                cards,
                                flippedCards: [],
                                locked: false
                            });
                        }
                    });

                } else {
                    this.setState({
                        flippedCards,
                        locked: false
                    });
                }
            } else {
                

                Animated.sequence([
                    Animated.delay(1500),
                    Animated.parallel(flippedCards.map(flippedCardIndex => this.flipCard(flippedCardIndex, "back")))
                ]).start(() => {
                    this.setState({
                        flippedCards: [],
                        locked: false,
                    });
                    this.props.incrementCounter();
                });
                setTimeout(function(){ wrongSound.play(); }, 0);
            }
        } else {
            this.setState({ flippedCards, locked: false });
        }
    }


    flipCard(cardIndex, direction) {
        const rotateValue = direction === "back" ? 0 : 1;

        return Animated.stagger(100, [
            Animated.timing(this.state.rotateCards[cardIndex], {
                toValue: rotateValue,
                duration: 200
            }),
            Animated.timing(this.state.scaleCards[cardIndex], {
                toValue: 1,
                duration: 100
            })
        ]);
    }

    resetGame() {
        const cards = this.state.cards.slice();
        const cardsReset = cards.map(card => {
            card.matched = false;
            return card;
        });

        this.setState({
            cards: cardsReset,
            found: [],
            flippedCards: [],
            locked: false,
            status: "reset",
        });

        this.props.resetCounter();

        this.renderCards(cardsReset);
    }


    render() {
        const cards = this.state.cards;
        const reference = this;
        return (
            <React.Fragment>

                <GameHeader difficulty={this.props.difficulty} gameStatus={this.state.status} counter={this.props.counter} onReset={() => this.resetGame()} />
                    <Overlay display={this.state.overlay} explanation={this.state.explanation} image={this.state.image} buttonName={this.state.buttonName} stop={() => this.setOverlay(false,[],null,"")}></Overlay>
                    <div className="content">
                        <div className="game">
                                <div className={this.props.difficulty}>
                                    <div className="grid-wrapper">
                                        <div className="grid">
                                            {cards.map((card, cardIndex) => (
                                                <AnimatedCard
                                                    key={card.id}
                                                    symbol={card.symbol}
                                                    onClick={() => this.checkMatches(cardIndex)}
                                                    style={{
                                                        opacity: this.state.dealCards[cardIndex],
                                                        transform: [
                                                            {
                                                                translateY: this.state.dealCards[cardIndex].interpolate({
                                                                    inputRange: [0, 1],
                                                                    outputRange: ["10px", "0px"]
                                                                })
                                                            },
                                                            {
                                                                scale: this.state.scaleCards[cardIndex]
                                                            },
                                                            {
                                                                rotateY: this.state.rotateCards[cardIndex].interpolate({
                                                                    inputRange: [-1, 0, 1],
                                                                    outputRange: ["-180deg", "0deg", "180deg"]
                                                                })
                                                            }
                                                        ]
                                                    }}
                                                />
                                            ))}
                                    </div>
                                    </div>
                                </div>
                                    <div className="aside">
                                        <p>Toll, diese Drillinge hast du schon gefunden!</p>
                                        <div className="grid-wrapper">
                                            <div className="grid">
                                        {
                                            this.state.found.map(function (d, idx) {
                                                return (<div key={idx}>
                                                    <img className="sideImage" src={window.location.origin + d.image_paths[0]} alt={d.name} width="70" height="70" onClick={() => reference.setOverlay(true, [{title:'Wer bin ich?',text:parse(d.texts[0])}], d.image_paths[0],"Zurück zum Spiel",null)}></img>
                                                </div>)
                                            })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                </div>
            </React.Fragment>
        );
    }
}

Game.propTypes = {
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

const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);

export default GameContainer;



