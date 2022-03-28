import React from 'react';

const ArticleHeader = ( {designation, type} ) => {
  return (
    <div className='article__header'>
      <p className='boxed'><b>Designation</b></p>
      <p>{designation}</p>
      <p className='boxed'><b>Type</b></p>
      <p>{type}</p>
    </div>
  );
}
 
export default ArticleHeader;