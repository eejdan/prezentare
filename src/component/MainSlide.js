import React, { useState } from 'react';
import { Animate } from 'react-simple-animate'
import "./MainSlide.css"

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
              <div id='map' style='width: 400px; height: 300px;'></div>
              <script>
                mapboxgl.accessToken = 'pk.eyJ1IjoiZWVkYW4iLCJhIjoiY2tscnNpcm1nMXBwejJxbjFnZ3loZm41ayJ9.xHOeRVn5X_eeTayRrL57_g';
                var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11'
                });
              </script>
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

