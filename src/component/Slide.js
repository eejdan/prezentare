import React from "react"
import { CSSTransition } from "react-transition-group";
import "./Slide.css"

export default class Slide extends React.Component {
    constructor() {
        super(props);
    }
    render() {
        <CSSTransition classNames="slide-trs">
            <slide className="slide-trs">
                {props.children}
            </slide>
        </CSSTransition>
    }
}