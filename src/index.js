import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Kennel } from "./components/Kennel.js"
import "./index.css"
import {NavBar} from "../src/components/nav/NavBar"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Kennel />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <NavBar />
        </Router>
    </React.StrictMode>,
    document.getElementById("nav")
)