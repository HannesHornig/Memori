import React from 'react';
import "./Overlay.css";

class Overlay extends React.Component {

    render() {
        return (
            <div>
            {this.props.display  &&
            <div className="overlay">
                <div className="text">
                <img src={window.location.origin + this.props.image1} className="picStyle" alt="icon"/>
                <br/>
                <img src={window.location.origin+this.props.image2} className="picStyle" alt="icon"/>
                <br/>
                <img src={window.location.origin+this.props.image3} className="picStyle" alt="icon"/>
                <br/>
                {this.props.explanation}
                <br/>
                <button onClick={this.props.stop}>Zurück zum Spiel</button>
                </div>

            </div>
        }
        </div>
        
        
        );
    }
}


export default Overlay;