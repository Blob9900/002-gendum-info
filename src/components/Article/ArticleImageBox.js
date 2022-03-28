import React from 'react';

const ArticleImage = ( {path, artist} ) => {
  return ( 
    <div className='boxed article__image-box'>
      <img className='article__image-box--image' src={process.env.PUBLIC_URL + path} alt="Illustration of MS in neutral pose." />
      <p className='article__image-box--credits'>Illustrated by {artist}.</p>
    </div>
  );
}
 
export default ArticleImage;