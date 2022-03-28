import React, { useState, useEffect } from 'react';
import { fetchFromRobotInfoDb, fetchFromMinorVariantsDb, testFetchFrom } from '../../scripts/fetchJson';
import { hideArticle } from '../../scripts/toggleArticle';
import ArticleHeader from './ArticleHeader';
import ArticleImageBox from './ArticleImageBox';
import ArticleProfile from './ArticleProfile';
import ArticleFooter from './ArticleFooter';
import ArticleMinorVariants from './ArticleMinorVariants';
import './Article.css';

const Article = ( {activeId, setIdFunc, setVisFunc} ) => {
  const [robotInfo, setRobotInfo] = useState("");
  //minorVariants must be initialized to null because of how it's used with a map function.
  const [minorVariants, setMinorVariants] = useState(null);

  //Fetch data upon id change, build new minor variant list.
  useEffect( () => {
    fetchFromRobotInfoDb(activeId, setRobotInfo);
    fetchFromMinorVariantsDb(activeId, setMinorVariants);
  }, [activeId]);

  return ( 
    <div id="article" className="article__grid">
      <ArticleHeader 
        designation={robotInfo.designation}
        type={robotInfo.type} />
      <ArticleImageBox 
        path={robotInfo.imagePath}
        artist={robotInfo.imageArtist} />
      <ArticleProfile 
        height={robotInfo.height} 
        weight={robotInfo.weight} 
        designer={robotInfo.designer}
        debut={robotInfo.debut}/>
      <ArticleMinorVariants
        names={minorVariants && minorVariants.names}
        minorIds={minorVariants && minorVariants.minorIds}
        activeId={activeId}
        setIdFunc={setIdFunc}
        />
      <ArticleFooter 
        blurb={robotInfo.blurb}
        loreLinks={robotInfo.loreLinks} />
      <button className='test' type="button" onClick={testFetchFrom}>Tests</button>
      <button type="button" onClick={() => hideArticle(setVisFunc)}>Close</button>
    </div>
   );
}
 
export default Article;