window.onload = function(){
    var display = document.getElementById('display');
    var minutos = document.getElementById('minutos');
    var segundos = document.getElementById('segundos');
    var comecar = document.getElementById('comecar'); //getElementById = vai pegar o elemento pela ID
    var cronometroSeg;
    var minutoAtual;
    var segundoAtual;
    var interval;
    for(var i = 0; i <= 60; i++){
        minutos.innerHTML+='<option value="'+i+'">'+i+'</option>'; //colocamos o valor "+i+" para aparecer e depois +i+ para poder criar de 1 a o valor que queremos 
    }
    for(var i = 0; i <= 60; i++){
        segundos.innerHTML+='<option value="'+i+'">'+i+'</option>';
    }
    comecar.addEventListener('click',function(){
        minutoAtual = minutos.value; //damos o valor para o minutoAtual utlizando o option value 
        segundoAtual = segundos.value; //damos o valor para o minutoAtual utlizando o option value 
        display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual; //utilizamos o childNodes para pegar o filho do display e logo em seguida damos o valor do minuto e segundo 
        interval = setInterval(function(){ //adicionamos um intervalo e sua função
            segundoAtual--; //segundo para diminuir os segundos e crianmos um "if" para resetar o time dos segundos quando chegar em 00 voltar para 59
            if(segundoAtual <= 0){ // aqui dizemos que quando o segundoAtual chegar em 0
                if(minutoAtual > 0){ //vai efetuar essa ação
                    minutoAtual--; // -1 minuto
                    segundoAtual= 59; // vai voltar para 59s
                }else{ // caso não tenha nenhum minuto no caso minutoAtual > 0 
                    alert("Acabou!") //vai notificar que acabou
                    document.getElementById("sound").play(); //vai tocar nosso som
                    clearInterval(interval) //necessario para poder limpar o intervalo 
                }
            }
            display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual; // repetimos para não demorar efetuar a troca do display
        }, 1000); //excencial para poder funcionar ativando o intervalo de 1 em 1s
    })
}