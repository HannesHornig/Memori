import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { formatTime } from "../Timer/Timer";
import "./Winner.css";
import logo from "../../pictures/Grenzgaenger_Logo.PNG";

class Winner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="winner">
                <img src={logo}></img>
                <p className="congrats-text">Super!!! Du hast das Global Memory in der Zeit von {formatTime(this.props.time)} gewonnen.</p>
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
