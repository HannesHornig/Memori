import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../pictures/Grenzgaenger_Logo.PNG";
import memory from "../../pictures/Quadrate.png";
import doubleMemory from "../../pictures/Quadrate_doppelt.png";
import gurke from "../../pictures/Gurke.jpg";
import banane from "../../pictures/Banane.jpg";


const height ="50px";
const Home = () => (
    <div className="home">
        <h1 className="header">Globales Memory<img src={logo}></img></h1>
        <div className="difficulty-container">
            <div className="linkClass"> <Link to="/game/easy" ><img src={memory} height ={height}></img>Spiel mit 15 gemischten Karten</Link></div>
            <div className="linkClass">  <Link to="/game/hard"><img src={doubleMemory} height ={height}></img>Spiel mit allen 30 Karten</Link></div>
            <div className="linkClass"> <Link to="/game/triples"><img src={gurke} height ={height}></img>Spiel nur mit den Gemüse Karten</Link></div>
            <div className="linkClass"> <Link to="/game/triples"><img src={banane} height ={height}></img>Spiel nur mit den Obst Karten</Link></div>
        </div>
    </div>
);

export default Home;
