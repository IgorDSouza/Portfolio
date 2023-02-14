
  const data = document.querySelectorAll('[data-scroll]');

  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
      arrow.style.display="none";

  }
  else {
// Debounce do Lodash
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function scroll(){
  const TopoTela = window.pageYOffset+((window.innerHeight*3)/5);
  data.forEach(function(element){
      if(TopoTela > element.offsetTop){
          element.classList.add('animacaoScroll');
      }
  })
    

}

if(data.length){
  window.addEventListener('scroll',debounce(function(){
  scroll();   
},200));
}
  }

  