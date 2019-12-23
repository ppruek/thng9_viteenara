import React from "react";
import ReactDOM from "react-dom";

// import registerServiceWorker from './registerServiceWorker';
import { browserHistory } from "react-router";

import Routes from "./router/routes";

ReactDOM.render(
    <Routes history={browserHistory} />,
    document.getElementById("root")
);
