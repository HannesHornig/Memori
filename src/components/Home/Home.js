import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import memory from "../../pictures/Quadrate.png";
import doubleMemory from "../../pictures/Quadrate_doppelt.png";

const height='20px';
const Home = () => (
    <div className="home">
        <h2><p>Ein Lernspiel zu den verwobenen Wegen von Obst und Gemüse</p></h2>
        <div className = "description-container">
                <p>Jeden Tag essen wir Kartoffeln, Tomaten oder Bananen.</p>
                <p>Schon gewusst?  Diese Obst- und Gemüsesorten gibt es noch nicht so lange in Deutschland.</p>
                <p>All’ diese Früchte haben einen langen Weg hinter sich. </p>
                <p>Sie haben viele Geschichten zu erzählen. </p>
                <p>Wie wachsen sie?</p>
                <p>Wo kommen sie ursprünglich her? </p>
                <p>Wie haben sie sich in der Welt verbreitet?</p>
                <p>All’ das kannst du in diesem Spiel erfahren!</p>
                <div className="difficulty-container">
                    <div className="homeLinkClass">  <Link to="/start/big/explanation"><i className="material-icons">send</i>Los geht's</Link>
                </div>
            </div>
        </div>
    </div>
);

export default Home;
