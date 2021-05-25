import React from "react";
import foerderer from "../../pictures/Foerderer_Logos.png";
import logo from "../../pictures/Grenzgaenger_Logo.PNG"
import ReturnBar from "../GameHeader/ReturnBar";

const Impressum = () => (
    <div>
        <div className={"description-container"}>
        <div className={"parent"}>
            <div className={"row"}>
                    <div className={"column"}>
                    <img src={logo}/>
                    <h2>grenzgänger | forschung & training</h2>
                    <p>im Netzwerk Migration in Europa e.V.</p>
                    <p>
                    <h3>grenzgänger | berlin</h3>
                    Am Sudhaus 2<br/>
                    12053 Berlin<br/>
                    </p>
                    <p>
                        mail@grenzgaenger-berlin.de<br/>
                        www.grenzgaenger-berlin.de</p>

                    <br/>
                </div>
                    <div className={"column"}>
                    <h1>in Zusammenarbeit mit</h1>
                    <h2>ThinkTheTank</h2>
                    <p>
                        freundschaftlicher Innovationshub, beteiligt an diesem Projekt: Martin Würflein, Gisela Grabe
                    </p>

                    <h2>freier Webdeveloper</h2>
                    <h3>Adam Selby</h3>
                    <p>
                        Das Lerntool ist im Rahmen des Projektes LebenGlobalAktiv entstanden. <br/>
                        Das Projekt wurde gefördert von
                    </p>
                    </div>
        </div>
<div className="row">
    <img className={"banner"} src={foerderer} style={{ width: "1400px", height: "400px" }}/>
</div>
</div>
        </div>
        </div>
);

export default Impressum;
