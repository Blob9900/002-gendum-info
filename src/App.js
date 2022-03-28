import React, { useState, useEffect } from 'react';
import Article from './components/Article/Article';
import DevChart from './components/DevChart/DevChart';
import './App.css';

const App = () => {
  const [id, setId] = useState("default");
  const [articleVisibility, setArticleVisibility] = useState("invisible");

  return (
    <div className="App">
      <DevChart 
        setIdFunc={setId}
        setVisFunc={setArticleVisibility}
      />
      <div className={"app__side-window--container " + articleVisibility}>
        <Article 
          activeId={id}
          setIdFunc={setId}
          setVisFunc={setArticleVisibility}
        />
      </div>
    </div>
  );
}

export default App;