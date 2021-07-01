import React from 'react';
import './IntroNasa.css';

const introPicUrl: string = "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG";

function IntroNasa() {
    return (
      <div className="IntroNasa">
            <h2>Mars App NASA</h2>
            <p>
                NASA shows different images taken on Mars and provides an excellent set of APIs which allow developers
                to get live data about many things and use them in their applications. 
            </p>
            <p>
                This application, given rover and a camera type, shows images taken by the rover with that camera type.
            </p>
            <img src={introPicUrl} className="IntroNasaImg" alt="Mars" />
      </div>
    );
}

export default IntroNasa;