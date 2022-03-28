//Returns unordered list of minor variants, with any active ones marked.
export function buildMinorVariantList(names, minorIds, activeId, setIdFunc) {
  if (names == null) {
    return (
      <ul className='record__minor-variants--list'>
        <li className='article__minor-variants--list-item'>NO DATA FOUND</li>
      </ul>
    );
  }
  else {
    const listItems = names.map(
      (name, index) => {
        if (minorIds[index] === activeId) {
          return (
            <li key={minorIds[index]} 
              onClick={() => setIdFunc(minorIds[index])}
              className='article__minor-variants--active-list-item'>
              {name}
            </li>
          );
        }
        else {
          return (
            <li key={minorIds[index]} 
              onClick={() => setIdFunc(minorIds[index])}
              className='article__minor-variants--list-item'>
              {name}
            </li>
          );
        }
      } 
    );
    return (<ul className='record__minor-variants--list'>{listItems}</ul>);
  }
  
};