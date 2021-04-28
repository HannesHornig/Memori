import React from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./GameHeader.css";


const GameHeader = props => {

    const history = useHistory();
    return (
    <nav className="header">
        <button  onClick={()=>history.goBack()}>
            <i className="material-icons">arrow_back</i>
        </button>
        <div className="counter-container"> {props.counter} {props.counter === 1 ? 'Versuch' : 'Versuche'}</div>
        <button onClick={() => props.onReset()}>
            <i className="material-icons">refresh</i>
        </button>
    </nav>
    )
};

GameHeader.propTypes = {
    gameStatus: PropTypes.string,
    counter: PropTypes.number,
    onReset: PropTypes.func
};

export default GameHeader;
