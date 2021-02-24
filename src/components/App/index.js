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

const App = () => (
<div className="app">
        <header><h1>Wandernde Früchte<img src={logo}></img></h1></header>
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

        
    <div><Link to="/impressum">Impressum</Link></div> 
    </div>
    
);

export default App;
