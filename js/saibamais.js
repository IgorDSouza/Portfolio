var btn= document.getElementById("mais");
var sobre = document.getElementById("sobre")

function saibaMais(){
    if(sobre.style.display == 'block'){
        sobre.style.display='none';
    }else{
        sobre.style.display='block';
    }
}
 btn.addEventListener("click", saibaMais);