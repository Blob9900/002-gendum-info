import React from 'react';

const ArticleProfile = ( {height, weight, designer, debut}) => {
  return ( 
    <div className='article__profile'>
      <p className='boxed'><b>Basic Information</b></p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Designed By: {designer}</p>
      <p>Debuted in: {debut}</p>
    </div>
   );
}
 
export default ArticleProfile;