import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Explanation.css";
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
                {finished?
                <div>
                    <h2>Super!!! Du hast das Spiel mit {this.props.counter} Versuchen gelöst!</h2>
                    <h3>Jetzt bist du ein*e Pflanzenexpert*in.
Klickt auf die gefundenen Pflanzen.
Sie erzählen dir ihre Geschichten.</h3>
                    </div>
                    :<div><p><h3>
                        Kakao, Popcorn und Guacamole. Mhhh...lecker. 
Aber was für Obst und Gemüse steckt dahinter? 
An was für einer Pflanze wächst es?</h3> 
</p>
<p><h3>Klicke auf die Früchte. 
So kannst mehr über sie erfahren. 
Aber Vorsicht! 
Schau dir die Bilder genau an.
Gleich musst du die passenden Bilder im Memory wiederfinden.</h3></p>
</div>}
                    <ul class="cardOverview">
                    {   
                    cards.map(function (d, idx) {

                        return (<li class="cardItem" key={idx} onClick={() => reference.setOverlay(true, finished?[{title:'Wo komme ich her',texts:d.texts[1]},{title:'Mein Weg in die Welt hinaus',text:d.texts[2]}]:[{title:'Wer bin ich?',text:d.texts[0]}], d.image_paths[finished?1:0])}><div class="centerText">{d.name}</div>
                            <img src={window.location.origin + d.image_paths[0]} alt={d.name} ></img>
                            <img src={window.location.origin + d.image_paths[1]} alt={d.name} ></img>
                            <img src={window.location.origin + d.image_paths[2]} alt={d.name} ></img>
                        </li>
                        )
                    })
                    
                        }
                </ul> 
                {finished?'':<h2>Na, weißt du jetzt, welche Frucht wie wächst?</h2>}

                <div className="explanationLink">
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
