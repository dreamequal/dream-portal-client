import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import * as serviceWorker from "./serviceWorker";
import history from "./utils/history";
import rootStore from "./stores/rootStore";

import App from "./App";

const initialState = {};
const store = rootStore(initialState, history);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app-root")
);

serviceWorker.unregister();
