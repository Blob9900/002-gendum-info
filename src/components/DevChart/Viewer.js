import React, { useState, useRef } from 'react';
import { useGesture } from 'react-use-gesture';
import InnerSVG from './InnerSVG';

function InteractiveWrapper( {activeId, setIdFunc, setVisFunc} ) {
  let [coord, setCoord] = useState( {x: 0, y: 0} );
  let chartRef = useRef();
  useGesture(
    {
      onDrag: ({ offset: [dx, dy] }) => {
        setCoord( {x: dx, y: dy});
      },
    }, 
    {
      domTarget: chartRef
    }
  );

  return (
    <div 
      ref={chartRef} 
      style={{
        position: 'relative',
        left: coord.x,
        top: coord.y
      }}>
      <InnerSVG activeId={activeId} setIdFunc={setIdFunc} setVisFunc={setVisFunc} />
    </div>
  )
}

const Viewer = ( {setIdFunc, setVisFunc} ) => {
  return ( 
    <div className="chart__viewer--chart-area">
      <InteractiveWrapper setIdFunc={setIdFunc} setVisFunc={setVisFunc} />
    </div>
   );
}
 
export default Viewer;