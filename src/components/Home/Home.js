import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


const height='20px';
const Home = () => (
    <div className="home">
        <h2><p>Wandernde Früchte - Ein Lernspiel zu den verwobenen Wegen von Obst und Gemüse</p></h2>
        <div className = "description-container">
                <p>Jeden Tag essen wir Kartoffeln, Tomaten oder Bananen.</p>
                <img src="/pictures/kartoffel_startpage.png"></img>
                <p>Schon gewusst?  Diese Obst- und Gemüsesorten gibt es noch nicht so lange in Deutschland.</p>
                <p>All diese Früchte haben einen langen Weg hinter sich. </p>
                <p>Sie haben viele Geschichten zu erzählen. </p>
                <p>Davon kannst du in diesem Spiel erfahren!</p>
                <div className="difficulty-container">
                    <div className="homeLinkClass">  <Link to="/start/big/explanation"><i className="material-icons">send</i>Zum Spiel</Link>
                </div>
            </div>
        </div>
    </div>
);

export default Home;
