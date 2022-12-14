var contentSpeak='Olá, Sou Igor! ';
var contentSpeak2='Dev Junior em busca de conhecimento👽!';
var contentSpeak3='Nessa viagem tive contato com algumas tecnologias e sigo estudando constantemente 🤓 ';

var vel = 70;
var i=0;
var j=0;
var k=0;
function content1(){
    if(i<contentSpeak.length){
        document.getElementById('speak').innerHTML += contentSpeak.charAt(i);
        i++;
        setTimeout(content1,vel);
          
    }
}
function content2(){
    if(j<contentSpeak2.length){
        document.getElementById('speak2').innerHTML += contentSpeak2.charAt(j);
        j++;
        setTimeout(content2,vel);
          
    }
}

function content3(){
    if(j<contentSpeak3.length){
        document.getElementById('speak3').innerHTML += contentSpeak3.charAt(k);
        k++;
        setTimeout(content3,80);
          
    }
}

setTimeout(content1,5500);
setTimeout(content2,7600);
