import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import Game from "../Game/Game";
import Explanation from "../Explanation/Explanation";
import "./App.css";

const App = () => (
    <div className="app">
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
