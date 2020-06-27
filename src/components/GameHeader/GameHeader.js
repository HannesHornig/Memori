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
        <div className="timer-container">
            <Timer status={props.gameStatus} />
        </div>
        <img src={logo} width="10%"></img>
        <button onClick={() => props.onReset()}>
            <i className="material-icons">refresh</i>
        </button>
    </div>
);

GameHeader.propTypes = {
    gameStatus: PropTypes.string,
    onReset: PropTypes.func
};

export default GameHeader;
