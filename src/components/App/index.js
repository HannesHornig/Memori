import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import Game from "../Game/Game";
import Map from "../Map/Map";
import Explanation from "../Explanation/Explanation";
import "./App.css";
import logo from "../../pictures/Grenzgaenger_Logo.PNG";
import { Link } from "react-router-dom";
import Impressum from "../Impressum/impressum";
import Ueber from "../Impressum/ueber";
import Lexicon from "../Lexicon/lexicon";

const App = () => (
<div className="app">
        <header><Link to="/"><h1>Wandernde Früchte<img src={logo}></img></h1></Link><Link to="/lexicon" class="lexiconClass">Erklärungen</Link><Link to="/ueber" class="impressumClass">Über das Spiel</Link><Link to="/impressum" class="impressumClass">Impressum</Link></header>
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
        render={props => <Explanation difficulty={props.match.params.difficulty} status={1} textPage={true} fruitPage={false}/>
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
