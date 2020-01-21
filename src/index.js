import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from './utils/react-auth0-spa';
import config from './config/config.js';
import history from './utils/history';

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

ReactDOM.render(
    <Auth0Provider
        domain={config.auth0.DOMAIN}
        audience={config.auth0.AUDIENCE}
        client_id={config.auth0.CLIENT_ID}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
    >
        <App />
    </Auth0Provider>,
    document.getElementById("app-root")
);

serviceWorker.unregister();
