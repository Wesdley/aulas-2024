window.onload = function(){
    var minutos = document.getElementById('minutos');
    var segundos = document.getElementById('segundos');
    var display = document.getElementById('display');
    var comecar = document.getElementById('comecar');
    var minutosAtual;
    var segundosAtual;
    var interval;
    for(var i = 0; i <= 60; i++){
        minutos.innerHTML+='<option value="'+i+'">'+i+'</option>';
    }
    for(var i = 1; i <= 60; i++){
        segundos.innerHTML+='<option value="'+i+'">'+i+'</option>';
    }
    comecar.addEventListener('click', function(){
        minutosAtual = minutos.value;
        segundosAtual = segundos.value;
        display.childNodes[1].innerHTML = minutosAtual + ":" + segundosAtual;
        interval = setInterval(function(){
            segundosAtual--;
            if(segundosAtual <= 0){
                if(minutosAtual > 0){
                    minutosAtual--;
                    segundosAtual = 59;
                }else{
                    alert("Acabou!");
                    document.getElementById('sound').play();
                    clearInterval(interval)
                }
            }
        display.childNodes[1].innerHTML = minutosAtual + ':' + segundosAtual;
        }, 1000); 
    })
}

//i need to improve my javascript :(
