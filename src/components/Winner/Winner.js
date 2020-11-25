import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { formatTime } from "../Timer/Timer";
import "./Winner.css";
import logo from "../../pictures/Grenzgaenger_Logo.PNG";
import Overlay from "../Overlay/Overlay";

import games from "../../games.json";
import names from "../../names.json";


class Winner extends Component {
    constructor(props) {
        super(props);

        this.setOverlay = this.setOverlay.bind(this);
        this.state = {
            overlay: true,
            images: [logo,logo,logo],
            explanation: ["Hallo ich bi ndie richtige Erklärung dazu sadfjlksad fasdlfkj asdlökfj asdlköfj asdlkfj asdöflkj asdf sakdöflj asdlöfjkasdf asdlökfj asdf lkasdjfölkjadsf ","asdfsadf","jasdflökjjlaskdjf"]
        };
    }

        /**
 * Method-Call for showing/hidding the overlay
 * @param {boolean} toDisplay - if true, overlay is rendered
 * @param {string} explanation  - explanationText
 * @param {URL} img - image which is shown over the text (can be null)
 */
setOverlay(toDisplay, explanation, images) {
    this.setState({
        overlay: toDisplay,
        explanation: explanation,
        images: images,
    });
}

    render() {
        const reference = this;
        const selectedLevel =games.find(game => game.difficulty === this.props.difficulty);

        const cards = [];
        for (let card in selectedLevel.cards) {
            let cardValue = selectedLevel.cards[card];

            cards.push(names.find(element => element.name === cardValue));
        }

        return (
            <div className="winner">
            <Overlay display={this.state.overlay} explanation={this.state.explanation} image1={this.state.images[0]} image2={this.state.images[1]} image3={this.state.images[2]} stop={() => this.setOverlay(false,"",[])}></Overlay>
                
                <img src={logo}></img>
                <p className="congrats-text">Super!!! Du hast das Global Memory gelöst!</p>
                    <h4> klicke auf deine gesammelten Früchte und Gemüse um mehr zu erfahren :-)</h4>
                    <ul>
                    {   
                    cards.map(function (d, idx) {
                        return (<li key={idx}>{d.name}
                            <img src={window.location.origin + d.image_paths[0]} alt={d.name} width="100" height="100" onClick={() => reference.setOverlay(true, d.text, d.image_paths)}></img>
                        </li>)
                    })
                    
                        }
</ul> 
                
                <div className="winnerLinkClass">
                <Link to="/">Zurück zum Hauptmenü</Link>
                </div>
            </div>
        );
    }
}

Winner.propTypes = {
    time: PropTypes.number
};

const mapStateToProps = state => ({ time: state.timer });

const ConnectedWinner = connect(mapStateToProps)(Winner);

export default ConnectedWinner;
