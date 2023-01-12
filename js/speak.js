var contentSpeak='Olá, Sou Igor! ';
var contentSpeak2='Dev Junior em busca de conhecimento👽!';


var vel = 50;
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
    if(j==contentSpeak2.length){
        btn.style.display='block';
    }
}


setTimeout(content1,5500);
setTimeout(content2,7600);
