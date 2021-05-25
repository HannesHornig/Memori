import React from "react";
import ReturnBar from "../GameHeader/ReturnBar";
var desc_id = 0
function down(){
    if ( desc_id < 12 ) {
        desc_id += 1
    }
    return "#description"+desc_id
}


const Lexicon = () => (
        <div>
            <ReturnBar title="Erklärungen" home="true"></ReturnBar>
            <div className="lexicon">
                <div className="arrow">
                    <a href={down()}>
                        <span></span>
                        <span></span>
                    </a>
                </div>
    <article id={"description1"}>
    <h1>Erklärungen</h1>
    <h2>*</h2>
    <div className="text-column">
        <p>
        Viele glauben:<br/>
        Es gibt Frauen.<br/>
        Es gibt Männer.<br/>
        Aber es gibt viel mehr Geschlechter.<br/>
        Zum Beispiel Menschen, die sich nicht als Frau oder Mann fühlen.<br/>
        Das wollen wir auch zeigen.<br/>
        Deshalb schreiben wir zum Beispiel:<br/>
        <em><b>Freund*innen.</b></em><br/>
        Das Sternchen steht für alle Menschen,die sich nicht als Frau oder Mann verstehen.<br/>
        Im Wort Freund*innen<br/>
        stecken also alle Menschen drinnen, egal wie sie sich bezeichnen oder fühlen.<br/>
        Alle sollen sich angesprochen fühlen.<br/>
        </p>
    </div>
    </article>
<article id={"description2"}>
    <h3>Einfache Sprache:</h3>
    <div className="text-column">
        Einfache Sprache ist eine sehr leicht verständliche Sprache.<br/>
        Mensch kann sie sprechen und schreiben.<br/>
        Es werden leichte Wörter und kurze Sätze benutzt.<br/>
        Es gibt viele Beispiele und Bilder.<br/>
        Einfache Sprache verstehen viele Menschen besser.<br/>
        Einfache Sprache macht das Lesen für viele Menschen leichter. <br/>
        Deshalb nutzen wir in dem Lernspiel Einfache Sprache.<br/>
    </div>
</article>
    <article id={"description3"}>
        <h3>Grenze:</h3>
        <div className="text-column">
            Eine Grenze ist eine Linie zwischen zwei Gebieten. <br/>
            Gebiete können Städte, Dörfer oder Länder sein. <br/>
            Grenzen sind von Menschen gemacht. <br/>

            Deswegen können sie sich auch verändern.<br/>
            Das fällt auch in den Gemüse-Geschichten auf:<br/>
            Die Länder, die es heute gibt, waren früher noch nicht da.<br/>
            Zum Beispiel in der Geschichte der Kartoffel das Land Peru.<br/>

            Deshalb sagen wir in der Geschichte zum Beispiel: „im heutigen Land Peru.“<br/>
        </div>
    </article>

    <article id={"description4"}>
        <h3>Handel</h3>
        <div className="text-column">
                Beim Handel tauschen Menschen Waren untereinander aus.<br/>
                Waren sind zum Beispiel Lebensmittel, Kleidung oder Geräte.<br/>
                Früher haben die Menschen eine Ware direkt gegen eine andere getauscht.<br/>
                Das war der Tauschhandel.<br/>
                Heute bezahlen Menschen eine Ware oft mit Geld.<br/>
                Der gesamte Handel mit Waren ist ein Teil der Wirtschaft.<br/>
        </div>
    </article>

    <article id={"description5"}>
        <h3>Kolonialismus</h3>
        <h4>Kolonie heißt:</h4>
        <div className="text-column">
            Ein Land erobert Gebiete in einem anderen Land.<br/>
            Die Eroberer*innen übernehmen die Herrschaft über die Einwohner*innen.<br/>
            Das eroberte Land wird Kolonie genannt. <br/>
            <h4>Kolonialmacht heißt:</h4>
            <p>Das Land von den Eroberern nennt man: Kolonialmacht.</p>
            <p>„Macht“ ist ein anderes Wort für ein Land, das großen Einfluss hat.</p>
        </div>
    </article>

    <article id={"description6"}>
        <h4>Kolonialismus heißt:</h4>
        <div className="text-column">
            Vor 500 Jahren haben viele Länder Kolonien errichtet.<br/>
            Zum Beispiel Spanien und Portugal.<br/>
            Später hat auch Deutschland beim Kolonialismus mitgemacht.<br/>
            Alle deutschen Kolonien zusammen waren am Ende 6 Mal so groß wie Deutschland.<br/>
        </div>
    </article>

    <article id={"description7"}>
        <h4>Die Menschen in den Kolonien:</h4>
        <div className="text-column">
            Die Menschen waren nach der Eroberung nicht mehr frei.<br/>
            Viele haben sich gegen die Eroberung gewehrt.<br/>
            Sie wurden unterdrückt und es gab viele Kämpfe.<br/>
            Sie mussten für die Kolonialmächte arbeiten.<br/>
            Sie mussten neue Gesetze annehmen.<br/>
            Und die Sprache und Lebensweise.<br/>
            Es gab auch Probleme mit Krankheiten.<br/>
            Zum Beispiel mit ansteckenden Krankheiten, die die Kolonialmächte mitgebracht haben.<br/>
            Daran sind viele Einwohner*innen gestorben.<br/>
        </div>
    </article>

    <article id={"description8"}>
        <h4>Kolonialismus heute: </h4>
        <div className="text-column">
            Heute gibt es keine Kolonien mehr. <br/>
            Trotzdem gibt es noch immer Probleme durch die alten Kolonialmächte.<br/>
            Zum Beispiel bei der Bezahlung von Arbeit.<br/>
            Video: Was ist eine Kolonie? (Logo TV/ ZDF)<br/>
            "Kolonialismus. Was hat Deutschland damit zu tun?" Erklärung in Leichter Sprache von Das Parlament<br/>
        </div>
    </article>

    <article id={"description9"}>
        <h3>Migration:</h3>
        <div className="text-column">
            Menschen begeben sich von einem Ort an einen anderen Ort.<br/>
            Zum Beispiel in eine neue Stadt oder ein neues Land. <br/>
            Sie bleiben an diesem neuen Ort.<br/>
            Sie machen dort was ihnen wichtig ist:<br/>
            Sie treffen Freunde und Familie oder gehen zur Schule oder Arbeit.<br/>
            Dann sind sie migriert.<br/>
            Menschen haben schon immer Migration gemacht.<br/>
            Früher und heute. <br/>
        </div>
    </article>

    <article id={"description10"}>
        <h3>Sklaverei:</h3>
        <div className="text-column">
            <p>
            Ein versklavter Mensch hat keine Freiheit und keine Rechte.<br/>
            Er gehört einer anderen Person.<br/>
            Oft müssen versklavte Menschen hart arbeiten.<br/>
            Sie werden schlecht behandelt oder geschlagen.<br/>
            Manchmal sogar eingesperrt oder getötet.<br/>
            Heute gibt es offiziell keine Sklaverei mehr.<br/>
            Trotzdem arbeiten in einigen Ländern immer noch viele Menschen wie Sklaven.<br/>
            </p>
        </div>
    </article>

    <article id={"description11"}>
        <h3>Sklavenhandel:</h3>
        <div className="text-column">
            <p>
            Ein Land oder eine Person handeln mit versklavten Menschen.<br/>
            Das bedeutet, dass die Menschen gegen Ware eingetauscht werden.<br/>
            Zum Beispiel gegen Gold, Silber, Geld oder Gewürze.<br/>
            Das ist dann Sklavenhandel.<br/>
            Den größten Handel mit Sklaven gab es zwischen Afrika und Amerika.<br/>
            Menschen aus Europa entführten mehr als 12 Millionen Menschen aus Afrika.<br/>
            So viele Menschen leben zum Beispiel heute in Paris oder Rio de Janeiro.<br/>
            Sie brachten sie auf Schiffen in die Amerikas.<br/>
            Viele Menschen sind auf dem Weg in den Schiffen gestorben.<br/>
            In der Geschichte der Mango geht es zum Beispiel um Sklavenhandel.<br/>
            </p>
        </div>
    </article>
    </div>
        </div>
);

export default Lexicon;
