import React from 'react';
import "./Overlay.css";

class Overlay extends React.Component {

    render() {
        return (
            <div>
                {this.props.display &&
                    <div className="overlay">
                        <div className="text">
                            <div class="row">
                                <div class="column">
                                    <img src={window.location.origin + this.props.image} className="picStyle" alt="icon" />
                                </div>
                                {
                                    this.props.explanation.map(function (d, idx) {

                                        return (
                                            <div class="column" key={idx}>
                                                {d.title}
                                                <br></br>
                                                {d.text}
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <button onClick={this.props.stop}>Zurück zum Spiel</button>
                        </div>
                    </div>
                }
            </div>


        );
    }
}


export default Overlay;