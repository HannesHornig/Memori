import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import "./Card.css";
//import symbol from "../../pictures/Kartoffel.jpg"; // relative path to image 

class Card extends PureComponent {
    render() {
        const { style, symbol } = this.props;
        return (
            <div className="card-wrapper">
                <button className="card" style={style} onClick={() => this.props.onClick()}>
                    <div className="front" />
                    <div className="back"><img src={window.location.origin + symbol} alt={'Spielkarte '+symbol} width="100%" height="100%"></img></div>
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
