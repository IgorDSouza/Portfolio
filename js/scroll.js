
  const data = document.querySelectorAll('[data-scroll]');

  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
    data.forEach(function(element){
      element.classList.add('animacaoScroll');
      var timer = null;

            var c=0;
            window.addEventListener('scroll', function () {
                const faltante = 50
                const arrow=document.getElementById("arrow");
                function topwindow(){
                            window.scrollTo(0,0);
                            
                }

    
                if (timer !== null) {
                    clearTimeout(timer);
                }
                timer = setTimeout(function () {

                        if (window.scrollMaxY-faltante < window.scrollY) {
                            arrow.style.transform="rotateX(180deg)";
                            arrow.style.cursor="pointer";
                            arrow.addEventListener('click',topwindow);
                            c++;

                        }else if(c>0){
                            arrow.style.transform="rotateX(0deg)";
                            arrow.style.cursor="auto";
                            arrow.removeEventListener('click',topwindow,true);
                            c=0;


                        }
                        
                }, 30);
            }, false);
    })
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
  

const arrow=document.getElementById("arrow");
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
}

  