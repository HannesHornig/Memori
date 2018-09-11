import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import Game from "../Game/Game";
import Winner from "../Winner/Winner";
import "./App.css";

const App = () => (
    <div className="app">
        <Route exact path="/" component={Home} />
        <Route
            exact
            path="/game/:difficulty"
            render={props => <Game difficulty={props.match.params.difficulty} history={props.history} />}
        />
        <Route exact path="/winner" component={Winner} />
    </div>
);

export default App;
