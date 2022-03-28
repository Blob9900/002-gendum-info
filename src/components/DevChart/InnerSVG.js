import React from 'react';
import { showArticle } from '../../scripts/toggleArticle';
import chart from '../../assets/devchart-v1.png'; 

const InnerSVG = ( {setIdFunc, setVisFunc} ) => {  
  return (
    <div>
      <svg xmlnsXlink="http://www.w3.org/1999/xlink"
       viewBox="0 0 6600 8000">
        <image xlinkHref={chart} />
        <rect x="2812" y="5765" opacity="0" width="180" height="150" onClick={() => showArticle("rx93", setIdFunc, setVisFunc)}/>
        <rect x="3011" y="6185" opacity="0" width="180" height="150" onClick={() => showArticle("rx0", setIdFunc, setVisFunc)}/>
      </svg>
    </div>
    );
}
 
export default InnerSVG;