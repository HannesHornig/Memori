import React from "react";
import foerderer from "../../pictures/Foerderer_Logos.png";
import logo from "../../pictures/Grenzgaenger_Logo.png"
import ReturnBar from "../GameHeader/ReturnBar";

const Impressum = () => (
    <div>
        <div className={"description-container"}>
        <div className={"parent"}>
            <div className={"row"}>
                    <div className={"column"}>
                    
                    <h3>grenzgänge | bildung im stadtraum e.V.</h3>
                    <p>
                    Am Sudhaus 2<br/>
                    12053 Berlin<br/>
                    mail@grenzgaenger-berlin.de<br/>
                    www.grenzgaenge.net</p>
                        <img src={logo}/>
                    <br/>
               
                    <h3>in Zusammenarbeit mit:</h3>
                    <h3>ThinkTheTank</h3>
                    <p>
                        freundschaftlicher Innovationshub, beteiligt an diesem Projekt: Martin Würflein, Gisela Grabe
                    </p>

                    <h3>freier Webdeveloper</h3>
                    <p>Adam Selby</p>
                    <p>
                        Das Lerntool ist im Rahmen des Projektes LebenGlobalAktiv entstanden.
                        
                    </p>
                    <h2> Das Projekt wurde gefördert von:</h2>
                    </div>
        </div>
</div>
        </div>
        <img className={"banner"} src={foerderer} style={{ width: "1400px", height: "400px" }}/>
        </div>
);

export default Impressum;
