import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../pictures/Grenzgaenger_Logo.PNG";
import memory from "../../pictures/Quadrate.png";
import doubleMemory from "../../pictures/Quadrate_doppelt.png";
import gurke from "../../pictures/Gurke.jpg";
import banane from "../../pictures/Banane.jpg";
import weltkarte from "../../pictures/weltkarte.jpg";

const height ="20px";
const Home = () => (
    <div className="home">
        <h1 className="header">Globales Memory<img src={logo}></img></h1>
        <div className = "description-container"><p>Wie viel weißt du eigentlich über die Lebensmittel, die du jeden Tag vor deiner Nase hast? Kannst du erraten, an was für einer Pflanze Früchte und Gemüse wachsen? Versuche es mal in dem Memory-Spiel.</p><p>Für uns ist es ganz normal jeden Tag Kartoffeln, Nudeln oder Bananen zu essen. Aber diese Lebensmittel gibt es noch gar nicht so lange in Deutschland. Alle diese Lebensmittel haben einen langen Weg hinter sich. Wo kommen sie ursprünglich her und wie kamen sie nach Deutschland? All’ das kannst du erfahren, wenn du das Memory erfolgreich geschafft hast!</p><p>1: "Kleines Memory" mit 5 verschiedenen Gemüse- und Obstsorten (Obst - Pflanze - Produkt) </p><p>2: “Großes Memory” mit 10 verschiedenen Gemüse- und Obstsorten (Obst - Pflanze - Produkt)</p><p>3: "Ländermemory" (Obst - Pflanze - Ursprungsland)</p></div>
        <div className="difficulty-container">
            <div className="homeLinkClass"> <Link to="/game/easy" ><img src={memory} height ={height}></img>Kleines Memory</Link></div>
            <div className="homeLinkClass">  <Link to="/game/hard"><img src={doubleMemory} height ={height}></img>Großes Memory</Link></div>
            <div className="homeLinkClass"> <Link to="/game/triples"><img src={gurke} height ={height}></img>Ländermemory</Link></div>
        </div>
    </div>
);

export default Home;
