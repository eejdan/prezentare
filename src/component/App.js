import React from "react"
import { MainSlide } from "./MainSlide.js"
import "./App.css"
import NavBar from "./NavBar.js"
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
    render() {
        document.body.style.overflow = "hidden";
        return(
            <React.Fragment>
                <NavBar />
                <MainSlide />
            </React.Fragment>
        );
    }
}