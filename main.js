var x=0;
var y=0;
drawCircle="";
drawRect="";

var SpeechRecognition= window.webkitSpeechRecognition;
var Recognition= new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="o sistema está ouvindo. Por favor, fale.";
    Recognition.start();
}
    Recognition.onresult=function(event){
        console.log(event);
        var content=event.results[0][0].transcript;
        document.getElementById("status").innerHTML="A fala foi reconhecida como:"+ content;

        if(content=="círculo"){
            x=Math.floor(Math.random()*900);
            y=Math.floor(Math.random()*600);
            document.getElementById("status").innerHTML="desenhando um circulo";
            drawCircle="set";
        }
        if(content=="retângulo"){
            x=Math.floor(Math.random()*900);
            y=Math.floor(Math.random()*600);
            document.getElementById("status").innerHTML="desenhando um retângulo";
            drawRect="set";
        }
    }

    function setup(){
        canvas=createCanvas(900,600);
    }

    function draw (){
        if(drawCircle=="set"){
            radius=Math.floor(Math.random()*100);
            circle(x,y,radius);
            document.getElementById("status").innerHTML="circulo desenhado";
            drawCircle="";
        }
        if(drawRect=="set"){
            rect(x,y,70,50);
            document.getElementById("status").innerHTML="retângulo desenhado";
            drawRect="";
        }
    }