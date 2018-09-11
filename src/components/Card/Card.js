import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./Card.css";

class Card extends PureComponent {
    render() {
        const { style, symbol } = this.props;
        return (
            <div className="card-wrapper">
                <button className="card" style={style} onClick={() => this.props.onClick()}>
                    <div className="front" />
                    <div className="back">{symbol}</div>
                </button>
            </div>
        );
    }
}

Card.propTypes = {
    symbol: PropTypes.string.isRequired,
    style: PropTypes.shape({
        opacity: PropTypes.number,
        transform: PropTypes.string
    }),
    onClick: PropTypes.func
};

export default Card;
