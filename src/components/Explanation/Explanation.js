import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Explanation.css";
import logo from "../../pictures/Grenzgaenger_Logo.PNG";
import Overlay from "../Overlay/Overlay";
import games from "../../games.json";
import names from "../../names.json";


class Explanation extends Component {
    constructor(props) {
        super(props);

        this.setOverlay = this.setOverlay.bind(this);
        this.state = {
            overlay: false,
            images: [],
            explanation: []
        };
    }

        /**
 * Method-Call for showing/hidding the overlay
 * @param {boolean} toDisplay - if true, overlay is rendered
 * @param {string} explanation  - explanationText
 * @param {URL} img - image which is shown over the text (can be null)
 */
setOverlay(toDisplay, explanation, image) {
    this.setState({
        overlay: toDisplay,
        explanation: explanation,
        image: image,
    });
}


    render() {
        const difficulty=this.props.difficulty;
        const finished=this.props.finished;
        const reference = this;
        const selectedLevel =games.find(game => game.difficulty === this.props.difficulty);

        const cards = [];
        for (let card in selectedLevel.cards) {
            let cardValue = selectedLevel.cards[card];

            cards.push(names.find(element => element.name === cardValue));
        }

        return (
            <React.Fragment>
                <nav className="header"><a href={"/"}><i className="material-icons">arrow_back</i></a>{finished?'Wo komme ich ursprünglich her?':'Wer bin ich, und wo wachse ich?'}</nav>
            <div className="explanation">
            <Overlay display={this.state.overlay} explanation={this.state.explanation} image={this.state.image} stop={() => this.setOverlay(false,[],[])}></Overlay>

                <h2>{finished?`Super!!! Du hast das Spiel mit ${this.props.counter} Versuchen gelöst!`:'<p>Schokolade, Popcorn und Guacamole. Mhhh...lecker.</p><p> Aber was für Obst und Gemüse steckt dahinter? </p><p> An was für einer Pflanze wächst es?  </p><p>Klicke auf die Früchte. </p><p> So kannst du mehr über sie erfahren. </p><p> Aber aufgepasst! </p><p> Schau dir die Bilder genau an.</p><p> Gleich musst du die passenden Bilder im Memory wiederfinden.</p><p> '}</h2>
                    <ul class="cardOverview">
                    {   
                    cards.map(function (d, idx) {

                        return (<li class="cardItem" key={idx} onClick={() => reference.setOverlay(true, finished?[{title:'Wo komme ich her',text:d.text1},{title:'Mein Weg in die Welt hinaus',text:d.text2}]:[{title:'Wer bin ich?',text:d.text}], d.image_paths[finished?1:0])}><div class="centerText">{d.name}</div>
                            <img src={window.location.origin + d.image_paths[0]} alt={d.name} ></img>
                            <img src={window.location.origin + d.image_paths[1]} alt={d.name} ></img>
                            <img src={window.location.origin + d.image_paths[2]} alt={d.name} ></img>

                        </li>)
                    })
                    
                        }
                </ul> 
                
                <div className="explanationLink">
                <p>Na, weißt du jetzt, welche Frucht wie wächst? Dann auf ...</p>
                {finished?(<Link to="/">Zurück zum Hauptmenü</Link>):( <Link to={`/game/${difficulty}`}>...zum Spiel</Link>)}
                </div>
            </div>
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => ({ counter: state.counter });

const ExplanationConnected = connect(mapStateToProps)(Explanation);
export default ExplanationConnected;
