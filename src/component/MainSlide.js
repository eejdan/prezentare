import React, { useState } from 'react';
import { Animate } from 'react-simple-animate';
import ReactMapboxGl from "react-mapbox-gl";
import "./MainSlide.css"

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZWVkYW4iLCJhIjoiY2tscnQzeDF3MXE2eDJvcXl2ZjJoaHFqdyJ9.ccglo-4xS2Ac9BVeG_d6zw"
});
function menuItem(props) {
  return (
    <div className="menuitem">
      <img src={props.imgsrc}></img>
      <title>{props.title}</title>
      <description>{props.desc}</description>
      <price>{props.price}</price>
    </div>
  );
}
export function MainSlide() {
    const [playMenu, setPlayMenu] = useState();
    const [playHarta, setPlayHarta] = useState();
    const [playContact, setPlayContact] = useState();
    return (
      <mainsl className="mainsl">
        <options>
          <div id="left" onClick={()=>{ setPlayMenu(!playMenu); setPlayHarta(false); setPlayContact(false); }}>
              Meniu
          </div>
          <div onClick={()=>{ setPlayHarta(!playHarta); setPlayMenu(false); setPlayContact(false);}}>
              Harta
          </div>
          <div id="right"onClick={()=>{ setPlayContact(!playContact); setPlayMenu(false); setPlayHarta(false); }}>
              Contact
          </div>
        </options>
        <slides>
          <Animate
            play={playMenu}
            duration={.51}
            start={{
              transform: "translateX(-200vw)"
            }}
            end={{
              transform: "translateX(0)"
            }}>
            <slide>Menu</slide>
          </Animate>
          <Animate
            play={playHarta} duration={.51}
            start={{
              transform: "translateY(200vh)"
            }}
            end={{
              transform: "translateY(0)"
            }}>
            <slide>
              Luca Centru
            <Map
              center={[28.05441933476897,45.433565428283494]}
              zoom={[18]}
              style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
              containerStyle={{
                height: "95%",
                width: "95%"
              }}
            >
            </Map>
            </slide>
          </Animate>
          <Animate
            play={playContact} duration={.51}
            start={{
              transform: "translateX(200vw)"
            }}
            end={{
              transform: "translateX(0)"
            }}>
            <slide>Contact</slide>
          
          </Animate>
        </slides>
      </mainsl>
    );
}

