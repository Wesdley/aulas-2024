$(function(){
    var timer;
    $(window).scroll(function(){
        console.log('scroll ativo')
    })
    $('a').click(function(e){
        e.preventDefault(); //Não ocorre o evento padrao 
        // return false; retorno seria falso
    })
    $(window).resize(function(){ // usado para designe responsivo * serve para redimencionar *
        //console.log('Janela sendo redimencionada')
        // util para levar uma pessoa para outro site exemplo o facebook com a pagina propria para mobile

        /* setTimeout(function() { //limpa a função para não ficar ciclando sem parar 
            clearTimeout(timer);
            timer = location.href = "https://jquery.com"
        }, 1000); */
       
        $('body').click(function(){
            $('.box').css('background-color','red')
        })
        $('.box').click(function(e){
            e.stopPropagation();
        })
    })
});