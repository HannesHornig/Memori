import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import incrementTimer from "../../actions/incrementTimer";
import resetTimer from "../../actions/resetTimer";
import "./Timer.css";

export const formatTime = time => {
    if (time < 0) return "--:--";
    const h = Math.floor(time / 3600);
    const m = Math.floor((time % 3600) / 60);
    const mm = m < 10 ? `0${m}` : m;
    const s = time % 60;
    const ss = s < 10 ? `0${s}` : s;
    if (h > 0) return [h, mm, ss].join(":");
    return `${m}:${ss}`;
};

const Timer = ({ time = 0 }) => <div className="timer">{formatTime(time)}</div>;

Timer.propTypes = {
    time: PropTypes.number
};

class TimerContainer extends React.Component {
    componentDidMount() {
        this.props.resetTimer();
    }

    componentDidUpdate(prevProps) {
        if (this.props.status !== prevProps.status) {
            switch (this.props.status) {
                case "started":
                    this.interval = setInterval(this.props.incrementTimer, 1000);
                    break;
                case "reset":
                    this.props.resetTimer();
                    clearInterval(this.interval);
                    break;
                case "stopped":
                    clearInterval(this.interval);
                    break;
                default:
                    clearInterval(this.interval);
                    break;
            }
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <Timer time={this.props.time} />;
    }
}

TimerContainer.propTypes = {
    time: PropTypes.number,
    incrementTimer: PropTypes.func,
    resetTimer: PropTypes.func,
    status: PropTypes.string
};

const mapStateToProps = state => ({ time: state.timer });

const mapDispatchToProps = dispatch => ({
    incrementTimer: () => dispatch(incrementTimer()),
    resetTimer: () => dispatch(resetTimer())
});

const ConnectedTimeCaintainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TimerContainer);

export default ConnectedTimeCaintainer;
