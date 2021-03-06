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
import Lexicon from "../Lexicon/lexicon";

const App = () => (
<div className="app">
        <header><h1>Wandernde Früchte<img src={logo}></img></h1><Link to="/lexicon" class="lexiconClass">Lexicon</Link><Link to="/impressum" class="impressumClass">Impressum</Link></header>
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
        render={props => <Explanation difficulty={props.match.params.difficulty} finished={true} textPage={true} fruitPage={false}/>
        } />
        <Route 
        exact
        path="/finished/:difficulty/fruits" 
        render={props => <Explanation difficulty={props.match.params.difficulty} finished={true} textPage={false} fruitPage={true}/>
        } />
        <Route 
        exact
        path="/start/:difficulty/explanation" 
        render={props => <Explanation difficulty={props.match.params.difficulty} finished={false} textPage={true} fruitPage={false}/>
        } />
        <Route 
        exact
        path="/start/:difficulty/fruits" 
        render={props => <Explanation difficulty={props.match.params.difficulty} finished={false} textPage={false} fruitPage={true}/>
        } />
        <Route exact path="/impressum" component={Impressum} />
        <Route exact path="/lexicon" component={Lexicon} />
        
   
    </div>
    
);

export default App;
