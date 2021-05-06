import React from "react";
import foerderer from "../../pictures/Foerderer_Logos.png";
import ReturnBar from "../GameHeader/ReturnBar";

const Impressum = () => (
        <div>
                <ReturnBar title="Impressum"></ReturnBar>
<div className="impressum">
        <div>
<h2>grenzgänger | forschung & training</h2>
<p>im Netzwerk Migration in Europa e.V.</p>

<h3>grenzgänger | berlin</h3>
<p>Am Sudhaus 2</p>
<p>12053 Berlin</p>

<p>mail@grenzgaenger-berlin.de</p>
<p>www.grenzgaenger-berlin.de</p>

<p>in Zusammenarbeit mit</p>

<h2>ThinkTheTank</h2>
<p>freundschaftlicher Innovationshub, beteiligt an diesem Projekt: Martin Würflein, Gisela Grabe</p>
<h2>Adam Selby</h2>
<p>freier Webdeveloper</p>
<p>Das Lerntool ist im Rahmen des Projektes LebenGlobalAktiv entstanden. </p>
<p>Das Projekt wurde gefördert von</p>
<div className="imgClass"><img src={foerderer} style={{ width: "70%", height: "70%" }}></img></div>
       
        </div>
    </div>
    </div>
    
);

export default Impressum;
