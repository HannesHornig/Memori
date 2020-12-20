import React from 'react';
import "./Overlay.css";

class Overlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0
        }
        this.increasePage = this.increasePage.bind(this);
        this.decreasePage = this.decreasePage.bind(this);
    }

    increasePage() {
        this.setState({
            page: this.state.page + 1
        });
    }

    decreasePage() {
        this.setState({
            page: this.state.page - 1
        });
    }

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
                                <div class="column">
                                    {this.props.explanation[this.state.page].title}
                                    <br></br>
                                    {this.props.explanation[this.state.page].text}
                                </div>
                            </div>
                            <button onClick={this.props.stop}>Zurück zum Spiel</button>
                            {this.props.explanation.length > 1 ?
                                <div>
                                    {this.state.page > 0 ? <a onClick={() => this.decreasePage()}><i className="material-icons">arrow_back</i></a> : ''}
                                    {this.state.page < this.props.explanation.length - 1 ? <a onClick={() => this.increasePage()}><i className="material-icons">arrow_forward</i></a> : ''}
                                </div> : ''
                            }
                        </div>
                    </div>
                }
            </div>


        );
    }
}


export default Overlay;