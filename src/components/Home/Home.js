import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../pictures/Grenzgaenger_Logo.PNG";
import memory from "../../pictures/Quadrate.png";
import doubleMemory from "../../pictures/Quadrate_doppelt.png";
import gurke from "../../pictures/Gurke.jpg";
import banane from "../../pictures/Banane.jpg";


const width ="100px";
const Home = () => (
    <div className="home">
        <h1 className="header">Globales Memory<img src={logo}></img></h1>
        <div className="difficulty-container">
            <Link to="/game/easy"><img src={memory} width ={width}></img>Spiel mit 15 gemischten Karten</Link>
            <Link to="/game/hard"><img src={doubleMemory} width ={width}></img>Spiel mit allen 30 Karten</Link>
            <Link to="/game/triples"><img src={gurke} width ={width}></img>Spiel nur mit den Gemüse Karten</Link>
            <Link to="/game/triples"><img src={banane} width ={width}></img>Spiel nur mit den Obst Karten</Link>
        </div>
    </div>
);

export default Home;
