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

const data = document.querySelectorAll('[data-scroll]');
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
 