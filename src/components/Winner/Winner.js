import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { formatTime } from "../Timer/Timer";
import "./Winner.css";
// TODO: die Bilder sollen eigentlich aus dem Ordner public/pictures/... genommen werden, damit wir die Bilderquelle nur an einer Stelle pflegen müssen
import logo from "../../pictures/Grenzgaenger_Logo.PNG";
import kartoffel1 from "../../pictures/Kartoffel.jpg";
import kartoffel2 from "../../pictures/Bratkartoffeln.jpg";
import kartoffel3 from "../../pictures/Kartoffelpflanze.jpg";
import kartoffel4 from "../../pictures/kartoffel4.jpg";
import mango1 from "../../pictures/mango1.jpg";
import mango2 from "../../pictures/mango2.jpg";
import mango3 from "../../pictures/mango3.jpg";
import mango4 from "../../pictures/mango4.jpg";
import ananas1 from "../../pictures/ananas1.jpg";
import ananas2 from "../../pictures/ananas2.jpg";
import ananas3 from "../../pictures/ananas3.jpg";
import ananas4 from "../../pictures/ananas4.jpg";
import Overlay from "../Overlay/Overlay";

class Winner extends Component {
    constructor(props) {
        super(props);

        this.setOverlay = this.setOverlay.bind(this);
        this.state = {
            overlay: true,
            images: [kartoffel1, kartoffel2, kartoffel3, kartoffel4, ananas1, ananas2, ananas3, ananas4, mango1, mango2, mango3, mango4],
            explanation: "Hallo, ich bin die Kartoffel! Schon vor über 13.000 Jahren gab es mich in Südamerika. Da sah ich noch noch ein wenig anders aus. Die Menschen dort bauten mich an und veränderten mich, sodass sie mich essen konnten. Vor 500 Jahren kamen Menschen aus Spanien nach Südamerika und nahmen mich mit dem Schiff mit nach Europa. Dort gibt es mich nun überall und jedes Kind kennt mich." 
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
        return (
            <div className="winner">
            <Overlay display={this.state.overlay} explanation={this.state.explanation} image={this.state.images} stop={() => this.setOverlay(false,"",[])}></Overlay>
                
                <img src={logo}></img>
                <p className="congrats-text">Super!!! Du hast das Global Memory gelöst!</p>
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
