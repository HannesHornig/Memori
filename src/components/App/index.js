import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import Game from "../Game/Game";
import Map from "../Map/Map";
import Explanation from "../Explanation/Explanation";
import "./App.css";
import background from "../../pictures/kartoffel_startpage_cleaned.png";
import { Link } from "react-router-dom";
import Impressum from "../Impressum/impressum";
import Ueber from "../Impressum/ueber";
import Lexicon from "../Lexicon/lexicon";

const App = () => (
<div className="app">
        <header>
                <div className={"parent"}>
                        <div className="bird-container bird-container--one">
                                <div className="bird bird--one"></div>
                        </div>
                        <div className="bird-container bird-container--two">
                                <div className="bird bird--two"></div>
                        </div>
                        <div className="bird-container bird-container--three">
                                <div className="bird bird--three"></div>
                        </div>
                        <div className="bird-container bird-container--four">
                                <div className="bird bird--four"></div>
                        </div>
                <div className={"row"}>
                        <div className={"column"}>
                                <Link to="/">
                                        <h1>Wandernde Früchte</h1>
                                </Link>
                        </div>
                        <div className={"column"}>
                                <nav>
                                        <Link to="/lexicon">Erklärungen</Link>
                                        <Link to="/ueber">Über das Spiel</Link>
                                        <Link to="/impressum" >Impressum</Link>
                                </nav>
                        </div>
                </div>
                </div>
        </header>
        <Route exact path="/" component={Home} />
        <Route
            exact
            path="/game/:difficulty"
            render={props => <Game difficulty={props.match.params.difficulty} history={props.history} />}
        />
        <Route
            exact
            path="/map/:difficulty"
            render={props => <Map difficulty={props.match.params.difficulty} history={props.history} />}
        />
        <Route 
        exact
        path="/finished/:difficulty/explanation" 
        render={props => <Explanation difficulty={props.match.params.difficulty} status={1} textPage={true} fruitPage={false} />
        } />
        <Route 
        exact
        path="/finished/:difficulty/fruits" 
        render={props => <Explanation difficulty={props.match.params.difficulty} status={1} textPage={false} fruitPage={true}/>
        } />
        <Route 
        exact
        path="/map/:difficulty/finished" 
        render={props => <Explanation difficulty={props.match.params.difficulty} status={2} textPage={true} fruitPage={false}/>
        } />
        <Route 
        exact
        path="/start/:difficulty/explanation" 
        render={props => <Explanation difficulty={props.match.params.difficulty} status={0} textPage={true} fruitPage={false}/>
        } />
        <Route 
        exact
        path="/start/:difficulty/fruits" 
        render={props => <Explanation difficulty={props.match.params.difficulty} status={0} textPage={false} fruitPage={true}/>
        } />
        <Route exact path="/impressum" component={Impressum} />
        <Route exact path="/lexicon" component={Lexicon} />
        <Route exact path="/ueber" component={Ueber} />
</div>


);

export default App;
