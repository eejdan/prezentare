import React from "react"
import Header from "./Header.js"
import MainSlide from "./MainSlide.js"
import "./App.css"

export default class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <MainSlide />
            </div>
        );
    }
}