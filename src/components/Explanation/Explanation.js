import React, { Component } from "react";
import { Link,  } from "react-router-dom";
import { connect } from "react-redux";
import parse from "html-react-parser";
import "./Explanation.css";
import Overlay from "../Overlay/Overlay";
import games from "../../games.json";
import names from "../../names.json";
import ReturnBar from "../GameHeader/ReturnBar";


class Explanation extends Component {
    constructor(props) {
        super(props);
        this._child = React.createRef();
        this.setOverlay = this.setOverlay.bind(this);
        this.state = {
            overlay: false,
            images: [],
            explanation: [],
            sound: null,
        };
    }

        /**
 * Method-Call for showing/hidding the overlay
 * @param {boolean} toDisplay - if true, overlay is rendered
 * @param {string} explanation  - explanationText
 * @param {URL} img - image which is shown over the text (can be null)
 */
setOverlay(toDisplay, explanation, image, sound) {
    this.setState({
        overlay: toDisplay,
        explanation: explanation,
        image: image,
        sound: sound,
    });
    this._child.current.reset();

    if(sound){
        this._child.current.play(window.location.origin + sound[0]);
    }
}

memoryFinished = () => {
    return (
        <div>
        <h2><p>Super!! Du hast alle Pärchen mit {this.props.counter} Versuchen gefunden!</p></h2>
        <p>Jetzt bist du ein*e Pflanzenexpert*in.</p>
        <p>Auf der nächsten Seite findest du nochmal alle gefundenen Pflanzen.</p>
        <p>Klicke auf die Früchte! Sie erzählen dir ihre Geschichten.</p>
        </div>
    )
}

mapFinished = () => {
    return (
        <div>
        <h2><p>Super!! Du hast alle Karten mit {this.props.counter} Versuchen richtig auf der Karte zugeordnet!</p></h2>
        <p>Jetzt bist du wahrhaftig ein*e Pflanzenexpert*in.</p>
        </div>
    )
}

entryText =(status) => {
    if(status==0)
    return (this.memoryIntroduction())

    if(status==1)
    return (this.memoryFinished())

    if(status==2)
    return (this.mapFinished())
}


memoryIntroduction = () => {
    return (
    <div>
                    <p>Kakao, Popcorn und Guacamole. Mhhh...lecker.</p>
                        <p>Aber was für Obst und Gemüse steckt dahinter?</p>
                    <p>An was für einer Pflanze wächst es?</p>
                    <p>Klicke auf die Früchte.</p>
                    <p>So kannst mehr über sie erfahren.</p>
                    <p>Aber Vorsicht!</p>
                    <p>Schau dir die Bilder genau an.</p>
                    <p>Gleich musst du die passenden Bilder im Memory wiederfinden.</p>
                    </div>
                        )
}

button = (difficulty,status,textPage) => {

        if(textPage) {
            if(status==0)
            return (<Link to={`/start/${difficulty}/fruits`}>Zu den Früchten</Link>)
            if(status==1)
            return (<Link to={`/finished/${difficulty}/fruits`}>Zu den Früchten</Link>)
            if(status==2)
            return (<Link to="/">Zurück zum Hauptmenü</Link>)
        } else {
            if(status==0)
             return (<Link to={`/game/${difficulty}`}>...zum Spiel</Link>)
            if(status==1)
            return (<Link to={`/map/${difficulty}`}>Zum Weltkartenspiel</Link>)
        }
        

}

endText = (difficulty,status,textPage) => {

        if(textPage&&status==1)
        return (<p>Na, weißt du jetzt, welche Frucht wie wächst? Dann auf zum Spiel.</p>)

}

componentDidMount() {
    window.scrollTo(0, 0)
} 

    render() {
        const difficulty=this.props.difficulty;
        const status=this.props.status;
        const reference = this;
        const selectedLevel =games.find(game => game.difficulty === this.props.difficulty);
        const textPage=this.props.textPage;
        const fruitPage=this.props.fruitPage;

        const cards = [];
        for (let card in selectedLevel.cards) {
            let cardValue = selectedLevel.cards[card];

            cards.push(names.find(element => element.name === cardValue));
        }

        return (
            <React.Fragment>
                <ReturnBar title={status?'Wo komme ich ursprünglich her?':'Wer bin ich, und wo wachse ich?'}></ReturnBar>
                <Overlay ref={this._child} display={this.state.overlay} explanation={this.state.explanation} image={this.state.image} buttonName="Zurück" sound={this.state.sound} stop={() => this.setOverlay(false,[],[],null)}></Overlay>
                
            <div className="explanation">
            {textPage&&(reference.entryText(status))}

                {fruitPage&&(

                    <ul class="cardOverview">
                    {   
                    cards.map(function (d, idx) {

                        return (<li class="cardItem" key={idx} onClick={() => reference.setOverlay(true, status?[{title:'Wo komme ich her',text:parse(d.texts[1])},{title:'Mein Weg in die Welt hinaus',text:parse(d.texts[2])}]:[ {title:'Wer bin ich?', text:parse(d.texts[0]) }], d.image_paths[status?0:1],status?d.sounds:null)}><div class="centerText">{d.name}</div>
                                
                                <img src={window.location.origin + d.image_paths[0]} alt={d.name} ></img>
                                {status==0&&<img src={window.location.origin + d.image_paths[1]} alt={d.name} ></img>}
                            {status==0&&<img src={window.location.origin + d.image_paths[2]} alt={d.name} ></img>}
                        </li>
                        )
                    })
                    
                        }
                    </ul>
                    )
                }

                {reference.endText(difficulty,status,textPage)}  

                <div className="explanationLink">
                {reference.button(difficulty,status,textPage)}    
                </div>
            </div>
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => ({ counter: state.counter });

const ExplanationConnected = connect(mapStateToProps)(Explanation);
export default ExplanationConnected;
