import React from 'react';
import { buildMinorVariantList } from '../../scripts/buildHtml';

//activeId is used to determine which list item to bold.
//setId is used to navigate to minor variant articles.
const ArticleMinorVariants = ( { names, minorIds, activeId, setIdFunc }) => {
  return ( 
    <div className='article__minor-variants'>
      <p className='boxed'><b>Variants</b></p>
      { buildMinorVariantList(names, minorIds, activeId, setIdFunc) }
    </div>
    );
}
 
export default ArticleMinorVariants;