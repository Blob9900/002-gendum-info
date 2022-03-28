export function showArticle( id, setIdFunc, setVisFunc ) {
  setIdFunc(id); 
  setVisFunc("visible");
}

function resetScroll(elemName) {
  let element = document.getElementById(elemName);
  element.scrollTop = 0;
}

export function hideArticle( setVisFunc ) {
  setVisFunc("invisible");
  resetScroll("article");
}