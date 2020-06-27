import React from 'react';
import "./Overlay.css";

class Overlay extends React.Component {

    render() {
        return (
            <div>
            {this.props.display  &&
            <div className="overlay">
                <div className="text">
                 <h3>Guck dir den Lebenszyklus dieser Frucht an</h3>
                <img src={window.location.origin + this.props.image1} className="picStyle" alt="icon"/>
                =>
                <img src={window.location.origin+this.props.image2} className="picStyle" alt="icon"/>
                =>
                <img src={window.location.origin+this.props.image3} className="picStyle" alt="icon"/>

                {this.props.explanation}</div>
            </div>
        }
        </div>
        
        
        );
    }
}


export default Overlay;