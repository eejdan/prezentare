import React, { useState } from 'react';
import { Animate } from 'react-simple-animate';
import "./MainSlide.css"
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZWVkYW4iLCJhIjoiY2tscnQzeDF3MXE2eDJvcXl2ZjJoaHFqdyJ9.ccglo-4xS2Ac9BVeG_d6zw"
});


//function mapItem(props) {return()}
function MenuItem(props) {
  return (
    <div className="menuitem">
      <img src={props.imgsrc} alt={props.title}></img><br />
      <stitle>{props.title}</stitle><br />
      <description>{props.desc}</description><br />
      <price>{props.price}</price><br />
    </div>
  );
}
export function MainSlide() {
  const items = [
    { 
      imgsrc: 'https://www.simigerialuca.ro/media/catalog/produse/covrigi-mac-susan.jpg',
      title: 'test', 
      desc: 'testdesc',  
      price: 'testprice'
    },
    {
        imgsrc: 'a',   
    }
  ]; 
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
          <slide>Menu
            {items.map((item) => <MenuItem imgsrc={item.imgsrc} title={item.title} desc={item.desc} price={item.price}></MenuItem>)}
            </slide>
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
                style="mapbox://styles/eedan/ckmoyc9og2a1n17o7ia9w0tit"
                containerStyle={{
                  height: "95%",
                  width: "95%"
                }}
                maxBounds={[
                  [27.970225185321965, 45.39173242870068],
                  [28.105613844153424, 45.473173079687385]
                ]}
                center={[28.05441933476897,45.433565428283494]}
                zoom={[10]}
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

