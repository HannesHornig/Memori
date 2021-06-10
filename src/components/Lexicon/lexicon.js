import React, {Component} from "react";

import lexi from "../../lexi.json"
import parse from "html-react-parser";




const lexicon = () => (
    <div>
            <div className="lexicon" style={{display: "block"}}>
                <div className={"parent"}>
                    <div className={"row"}>
                        <h1>Erklärungen</h1>
                    </div>

                    <div className={"row"}>
                        {
                            lexi.lexicon.map((lexiItem, i) => (
                                <a onClick={function (e) {
                                    showElement(lexiItem.name)}}>{lexiItem.title}</a>
                            ))
                        }
                                </div>
                    <div className={"container"}>
                        {
                            lexi.lexicon.map((lexiItem, i) => (
                                <article id={lexiItem.name}>
                                        <h2>{lexiItem.title}</h2>
                                    <p>{parse(lexiItem.text)}</p>
                                </article>
                                    ))
                        }
                            </div>
                </div>
            </div>
        </div>
    )

export default lexicon
