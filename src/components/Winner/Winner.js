import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { formatTime } from "../Timer/Timer";
import "./Winner.css";

class Winner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="winner">
                <p className="congrats-text">Congratulations, you just finished the game in {formatTime(this.props.time)}</p>
                <div>
                    <Link to="/">Main Menu</Link>
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
