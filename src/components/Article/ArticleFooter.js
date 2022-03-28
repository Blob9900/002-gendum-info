import React from 'react';

const ArticleFooter = ( {blurb, loreLinks }) => {
  return ( 
    <>
      <div className='article__footer--blurb'>
        <p className='boxed'><b>Description</b></p>
        <p>{blurb}</p>
      </div>
      <div className='article__footer--lore-links'>
        <p className='boxed'><b>Additional Reading</b></p>
        <p>{loreLinks}</p>
      </div>
    </>
   );
}
 
export default ArticleFooter;