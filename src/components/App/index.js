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
        <nav><ul><li><a href={"/"}>Heim</a></li><li><a href={"/game/big"}>Zum Spiel</a></li><li><a href={"/explanation/big"}>Explanations</a></li></ul></nav>
        <Route exact path="/" component={Home} />
        <Route
            exact
            path="/game/:difficulty"
            render={props => <Game difficulty={props.match.params.difficulty} history={props.history} />}
        />
        <Route 
        exact
        path="/finished/:difficulty" 
        render={props => <Explanation difficulty={props.match.params.difficulty} finished={true}/>
        } />
        <Route 
        exact
        path="/explanation/:difficulty" 
        render={props => <Explanation difficulty={props.match.params.difficulty} finished={false}/>
        } />
    </div>
);

export default App;
