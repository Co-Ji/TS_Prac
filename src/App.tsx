import React from "react";
import "./App.css";
import Prac from "./Prac";
import PrPrac from "./PrPrac";

function App() {
    const banana = {
        color: "yellow",
        taste: "sweet",
    };

    return (
        <React.Fragment>
            <Prac />
            <PrPrac />
        </React.Fragment>
    );
}

export default App;
