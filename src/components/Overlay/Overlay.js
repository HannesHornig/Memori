import React from 'react';
import "./Overlay.css";

class Overlay extends React.Component {

    render() {
        return (
            <div>
            {this.props.display  &&
            <div className="overlay">
                <div className="text">
                 <h3>Hallo, ich bin die Kartoffel!</h3>
                <img src={window.location.origin + this.props.image1} className="picStyle" alt="icon"/>
                <br/>
                <img src={window.location.origin+this.props.image2} className="picStyle" alt="icon"/>
                <br/>
                <img src={window.location.origin+this.props.image3} className="picStyle" alt="icon"/>
                <br/>
                {this.props.explanation}</div>
            </div>
        }
        </div>
        
        
        );
    }
}


export default Overlay;