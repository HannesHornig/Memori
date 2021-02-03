import React from 'react';
import "./Overlay.css";
import UIfx from 'uifx';


let sound;

class Overlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            playing: false
        }
        this.increasePage = this.increasePage.bind(this);
        this.decreasePage = this.decreasePage.bind(this);
        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
    }

    reset() {
        this.setState({
            page: 0
        });

        this.play(window.location.origin + this.props.sound);
    }

    increasePage() {
        this.setState({
            page: this.state.page + 1
        });
    }

    play(soundUri) {
        console.log(soundUri);
        sound=new UIfx(soundUri);
        sound.play();
        sound.setVolume(1.0);
        this.setState({
            playing:true
            });
    }

    stop() {
        sound.stop=true;
        this.setState({
            playing:false
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
                                {this.props.image&&
                                <div class="column">
                                    <img src={window.location.origin + this.props.image} className="picStyle" alt="icon" />
                                </div>
                                }
                                {this.props.sound&&
                                    <button onClick={!this.state.playing?()=>this.play(window.location.origin + this.props.sound):this.stop}>{!this.state.playing?'Play':'Stop'}</button>
                                }
                                <div class="column">
                                    <h2>{this.props.explanation[this.state.page].title}</h2>
                                    {this.props.explanation[this.state.page].text}
                                </div>
                            </div>
                            {this.props.explanation.length > 1 ?
                                <div>
                                    {this.state.page > 0 ? <a  onClick={() => this.decreasePage()}><i className="material-icons" >arrow_back</i></a> : ''}
                                    {this.state.page < this.props.explanation.length - 1 ? <a onClick={() => this.increasePage()}><i className="material-icons">arrow_forward</i></a> : ''}
                                </div> : ''
                            }
                            <button onClick={this.props.stop}>{this.props.buttonName}</button>

                        </div>
                    </div>
                }
            </div>


        );
    }
}


export default Overlay;