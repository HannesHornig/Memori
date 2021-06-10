import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => (

        <div className={"border explanation background-set"}>
            <div className={"bg"}></div>
            <img className={"potato"} src={"/pictures/potato_high.png"}/>
        <div className={"description-container text-box"}>
            <div className={"parent"}>
                <div className={"row"}>
                        <h1>Ein Lernspiel zu den verwobenen Wegen von Obst und Gemüse</h1>
                </div>

                <div className={"row"}>
                    <p>
                        Jeden Tag essen wir Kartoffeln, Tomaten oder Bananen.<br/>
                        Schon gewusst?  Diese Obst- und Gemüsesorten gibt es noch nicht so lange in Deutschland.<br/>
                        All diese Früchte haben einen langen Weg hinter sich. <br/>
                        Sie haben viele Geschichten zu erzählen. <br/>
                        Davon kannst du in diesem Spiel erfahren!<br/>
                    </p>
                </div>
            </div>
        </div>
                <div className={"explanationLink"}>
                    <br/>
                    <Link to="/start/big/explanation">Zum Spiel<i className="material-icons">send</i></Link>
                </div>
    </div>
);

export default Home;
