import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => (
    <div className="home">
        <h1 className="header">Game of Memory</h1>
        <div className="difficulty-container">
            <Link to="/game/easy">Easy</Link>
            <Link to="/game/hard">Hard</Link>
            <Link to="/game/triples">Triples</Link>
        </div>
    </div>
);

export default Home;
