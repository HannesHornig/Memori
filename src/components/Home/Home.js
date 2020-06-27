import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
    <div className="home">
        <h1 className="header">Globales Memory</h1>
        <div className="difficulty-container">
            <Link to="/game/easy">Spiel mit 15 gemischten Karten</Link>
            <Link to="/game/triples">Spiel nur mit den Gemüse Karten</Link>
            <Link to="/game/hard">Spiel mit allen 30 Karten</Link>
        </div>
    </div>
);

export default Home;
