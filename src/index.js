import React from "react";
import ReactDOM from "react-dom";
// import Tabdemo from "./components/tabdemo/index";
import Tabdemo1 from "./components/tabdemo1/index";
// import runtime from "serviceworker-webpack-plugin/lib/runtime";
//
// if(window.location.href != 7777) {
//     const registeration = runtime.register();
// }

ReactDOM.render(
    <Tabdemo1 />,
    document.querySelector("#root")
);
