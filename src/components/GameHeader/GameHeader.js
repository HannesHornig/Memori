import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Timer from "../Timer/Timer";
import "./GameHeader.css";
import logo from "../../pictures/Grenzgaenger_Logo.PNG"


const GameHeader = props => (
    <div className="header">

        <Link to="/">
            <i className="material-icons">arrow_back</i>
        </Link>
        <img src={logo}></img>
        <button onClick={() => props.onReset()}>
            <i className="material-icons">refresh</i>
        </button>
        <div class="counter-container"> {props.counter} Versuche</div>
    </div>
);

GameHeader.propTypes = {
    gameStatus: PropTypes.string,
    counter: PropTypes.number,
    onReset: PropTypes.func
};

export default GameHeader;
