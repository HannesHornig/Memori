import React from 'react';
import "./Overlay.css";

class Overlay extends React.Component {

    render() {
        return (
            <div>
            {this.props.display  &&
            <div className="overlay">
                <div className="text">
                <table border="1" frame="void" rules="rows" >
                    <tr>
                    <th>Kartoffel</th>
                    <td><img src={window.location.origin + this.props.image[0]} className="picStyle" alt="icon"/></td>
                    <td><img src={window.location.origin + this.props.image[1]} className="picStyle" alt="icon"/></td>
                    <td><img src={window.location.origin + this.props.image[2]} className="picStyle" alt="icon"/></td>
                    <td><img src={window.location.origin + this.props.image[3]} className="picStyle" alt="icon"/></td>
                    <td > {this.props.explanation}</td>
                    </tr>
                    <tr>
                    <th>Ananas</th>
                    <td><img src={window.location.origin + this.props.image[4]} className="picStyle" alt="icon"/></td>
                    <td><img src={window.location.origin + this.props.image[5]} className="picStyle" alt="icon"/></td>
                    <td><img src={window.location.origin + this.props.image[6]} className="picStyle" alt="icon"/></td>
                    <td><img src={window.location.origin + this.props.image[7]} className="picStyle" alt="icon"/></td>
                    <td> {this.props.explanation}</td>
                    </tr>
                    <tr>
                    <th>Mango</th>
                    <td><img src={window.location.origin + this.props.image[8]} className="picStyle" alt="icon"/></td>
                    <td><img src={window.location.origin + this.props.image[9]} className="picStyle" alt="icon"/></td>
                    <td><img src={window.location.origin + this.props.image[10]} className="picStyle" alt="icon"/></td>
                    <td><img src={window.location.origin + this.props.image[11]} className="picStyle" alt="icon"/></td>
                    <td> {this.props.explanation}</td>
                    </tr>
                </table>
                <button onClick={this.props.stop}>Zurück zum Spiel</button>
                </div>

            </div>
        }
        </div>
        
        
        );
    }
}


export default Overlay;