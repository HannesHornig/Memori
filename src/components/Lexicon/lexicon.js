import React, {Component} from "react";

import lexi from "../../lexi.json"
import parse from "html-react-parser";




const lexicon = () => (
    <div>
            <div className="lexicon" style={{display: "block"}}>
                <div className={"parent"}>
                    <div className={"row"}>
                        <p>Erklärungen</p>
                    </div>

                    <div className={"row"}>
                        {
                            lexi.lexicon.map((lexiItem, i) => (
                                <a onClick={function (e) {
                                    showElement(lexiItem.name)}}>{lexiItem.title}</a>
                            ))
                        }
                    </div>
                    <div className={"row"}>
                        {
                            lexi.lexicon.map((lexiItem, i) => (
                                <div className={"row"} id={lexiItem.name} style={{display:"none"}}>
                                        <h1> {lexiItem.heading?lexiItem.heading+" - "+lexiItem.title:lexiItem.title}</h1>
                                    <p>{parse(lexiItem.text)}</p>
                                </div>
                                    ))
                        }
                            </div>
                </div>
            </div>
        </div>
    )

export default lexicon
