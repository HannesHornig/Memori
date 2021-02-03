import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import Game from "../Game/Game";
import Explanation from "../Explanation/Explanation";
import "./App.css";
import logo from "../../pictures/Grenzgaenger_Logo.PNG";

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
    </div>
);

export default App;
