$(function(){
    var timer;
     var timeOut = function(){
        $('.box4').animate({
            'width':'40%',
            'height':'500px',
            'marginLeft':'-40px', // tomar cuidado que algumas especificações acabaram sendo diferentes
            'paddingTop':'200px',
        },2000)
    }

    $('body').click(function(){
        //alert("animação cancelada")
        clearTimeout(timer) // cancela a contagem do setTimeout
    })

    $('.box5').animate({
        'width':'40%',
        'height':'500px',
        'marginLeft':'-40px', // tomar cuidado que algumas especificações acabaram sendo diferentes
        'paddingTop':'200px',
    },2000, function(){
        timer = setTimeout(timeOut,3000) // colocamos o setTimeout para colocar um tempo de animação(utilizamos nossa var para poder passar o que vai acontecer e seu tempo).
        // TIMER serve para podermos cancelar a funçõa com o clear timeout
        console.log('Terminou o animate')
    });
    // colocamos a função que queremos no caso o width e height
    // o tempo que queremos que ocorra
    // podemos adicionar uma outra função se necessario
    var timer2;
    $('body').click(function(){
        console.log('setInterval cancelado')
        clearInterval(timer2)
    })
    timer2 = setInterval (function(){ // mesma coisa do setTimeout a diferença é que ele vai continuar executando sem parar de tempo em tempo
        console.log('ola mundo');
    },3000)
});