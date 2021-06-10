import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";
import "./index.css";

const store = createStore(rootReducer);

const root = document.querySelector("#root");
render(
    <BrowserRouter>
        <Provider store={store}>
            <App />

        </Provider>
    </BrowserRouter>,
    root
);
