import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { formatTime } from "../Timer/Timer";
import "./Winner.css";
import logo from "../../pictures/Grenzgaenger_Logo.PNG";
import Overlay from "../Overlay/Overlay";

class Winner extends Component {
    constructor(props) {
        super(props);

        this.setOverlay = this.setOverlay.bind(this);
        this.state = {
            overlay: true,
            images: [logo,logo,logo],
            explanation: "Hallo ich bi ndie richtige Erklärung dazu"
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
            <Overlay display={this.state.overlay} explanation={this.state.explanation} image1={this.state.images[0]} image2={this.state.images[1]} image3={this.state.images[2]} stop={() => this.setOverlay(false,"",[])}></Overlay>
                
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
