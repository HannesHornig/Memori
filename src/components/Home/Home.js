import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => (
    <div className={"explanation background-set border bg"}>
        <div className={"description-container"}>
            <div className={"parent"}>
        <div className={"row"}>
                    <div className={"column"}>
                        <h1>Wandernde Früchte</h1>
                        <h2>Ein Lernspiel zu den verwobenen Wegen von Obst und Gemüse</h2>
                        <p>Jeden Tag essen wir Kartoffeln, Tomaten oder Bananen.</p>
                    </div>
                </div>

        <div className={"row"}>
                         <div className={"column"}>
                        <p>
                            Schon gewusst?  Diese Obst- und Gemüsesorten gibt es noch nicht so lange in Deutschland.<br/>
                            All diese Früchte haben einen langen Weg hinter sich. <br/>
                            Sie haben viele Geschichten zu erzählen. <br/>
                            Davon kannst du in diesem Spiel erfahren!<br/>
                        </p>
                    </div>
        </div>
        </div>
        </div>
        <div className={"explanationLink"}>
            <Link to="/start/big/explanation">Zum Spiel<i className="material-icons">send</i></Link>
        </div>
    </div>
);

export default Home;
