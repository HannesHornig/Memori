import React from 'react';
import "./Overlay.css";
import UIfx from 'uifx';

import { Howl, Howler } from 'howler';

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
        this.stopSound = this.stopSound.bind(this);
        this.playPageSound = this.playPageSound.bind(this);
    }

    reset() {
        this.setState({
            page: 0
        });
    }

    increasePage() {
        this.stopSound();
        this.setState({
            page: this.state.page + 1
        },()=>this.playPageSound());
    }

    decreasePage() {
        this.stopSound(); 
        this.setState({
            page: this.state.page - 1
        },()=>this.playPageSound());
       
    }

    playPageSound() {
        if(this.props.sound) {
        this.play(window.location.origin + this.props.sound[this.state.page]);
        }
    }

    play(soundUri) {
        if(soundUri) {
        sound = new Howl({
            src: [soundUri]
        });

        sound.play();

        const thisRef=this;
        // Fires when the sound finishes playing.
        sound.on('end', function () {
            thisRef.setState({
                playing: false
            });
        });

        console.log(soundUri);
        //sound=new UIfx(soundUri);
        //sound.play();
        this.setState({
            playing: true
        });
        }
    }

    stopSound() {
        if(sound){
        sound.stop();
        }
        this.setState({
            playing: false
        });
    }

    removeClass(className){
        console.log(document.getElementById(className))
    }


    render() {
        return (
            <div>
                {this.props.display &&
                    <div className="overlay" id="overlay">

                            <a className={"close"} id={"close"} onClick={()=> {this.props.stop(); this.stopSound();}}>{this.props.buttonName}</a>
                        <div className="text">

                                {this.props.image &&
                                    <div className="column">
                                        <img src={window.location.origin + this.props.image} className="picStyle" alt="icon" />
                                    </div>
                                }
                                {this.props.sound &&
                                    <button onClick={!this.state.playing ? this.playPageSound : this.stopSound}>{!this.state.playing ? 'Play' : 'Stop'}</button>
                                }
                                <div className="column">
                                    <h2>{this.props.explanation[this.state.page].title}</h2>
                                    {this.props.explanation[this.state.page].text}
                                </div>
                            </div>
                            {this.props.explanation.length > 1 ?
                                <div>
                                    {this.state.page > 0 ? <a onClick={() => this.decreasePage()}><i className="material-icons" >arrow_back</i></a> : ''}
                                    {this.state.page < this.props.explanation.length - 1 ? <a onClick={() => this.increasePage()}>
                                        <i className="material-icons">arrow_forward</i></a> : ''}
                                </div> : ''
                            }

                    </div>
                }
            </div>
        );
    }
}



export default Overlay;