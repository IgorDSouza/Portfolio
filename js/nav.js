var nav = document.getElementById("nav");
var links = document.getElementById("links");
function appear(){
   if(links.style.visibility=='visible'){
    links.style.visibility='hidden';
   }else{
    links.style.visibility='visible';
   }
    
}

nav.addEventListener("click",appear);

