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
  
  const arrow=document.getElementById("arrow");
  const home= document.getElementById('navhome');
  const contato = document.getElementById('contatos');
  
  
  window.addEventListener('scroll',debounce(function () {
      console.log('dd')
      if(pageYOffset >= contato.offsetTop){
              arrow.style.transform="rotateX(180deg)";
              arrow.style.cursor="pointer";
              arrow.addEventListener('click',topwindow);
              
  }else{
      arrow.style.transform="rotateX(0deg)";
              arrow.style.cursor="auto";
              arrow.removeEventListener('click',topwindow);

  }
},250))
  function topwindow(){
              window.scrollTo(0,0);
              
  }