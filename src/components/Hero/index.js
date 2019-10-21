import React, { useEffect, useState } from 'react';
import HeroSVG from '../svgs/HeroSVG';
import ReadMore from '../ReadMore';

import './style.scss';

function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // On mount
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);

  return (
    <div className="hero">
      <div className={`hero__content ${loaded ? 'visible' : ''}`}>
        <h1>
        Why exporting
          <br />
          is big business for the UK
        </h1>
        <p>
          The seemingly interminable debates over Brexit have overshadowed an important fact: British exports are booming, with record-breaking highs in exports of goods and services over the past two years
        </p>
      </div>
      <div className={`hero__art ${loaded ? 'visible-art' : ''}`}>
        <HeroSVG />
      </div>
      <ReadMore content="Scroll to read on" />
    </div>
  );
}

export default Hero;
