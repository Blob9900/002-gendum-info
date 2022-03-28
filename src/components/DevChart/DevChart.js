import React from 'react';
import Viewer from './Viewer';
import './DevChart.css';

const DevChart = ( {setIdFunc, setVisFunc} ) => {  
  return (
    <div>
      <div className="chart__viewer--header"></div>
      <Viewer setIdFunc={setIdFunc} setVisFunc={setVisFunc} />
    </div>
    );
}
 
export default DevChart;