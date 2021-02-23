import React from "react"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import "./MainSlide.css"

export default class MainSlide extends React.Component {
    render() {
        return(
            <mainslide>
                <slidehead>
                    <div id="left">NumeroUno</div>
                    <div>NumeroUno</div>
                    <div id="right">NumeroUno</div>
                </slidehead>
                <Splide>
                    <SplideSlide>
                        <tab>
                            TabContent
                        </tab>
                    </SplideSlide>
                    <SplideSlide>
                        <tab>
                            
                        </tab>
                    </SplideSlide>
                </Splide>
            </mainslide>
        );
    }
}