$(function(){
    var indiceAtual = 0;
    var indiceMaximo = $('.slider img').length;
    //length serve para pegar a quantidade de elementos que existe
    var delay = 10000;
    initSlider();
    clickSlider();
    function initSlider(){
       /*  $('.slider img').each(function(i){
            if (i == 0) {
                $(this).fadeIn();
            }
        }) */
       // podemos fazer desta forma tb 
        for(var i = 0; i < indiceMaximo; i++){
            if(i == 0){
                $('.bulletnav').append('<span style="background-color: #069;"></span>');
            }else {
                $('.bulletnav').append('<span></span>');
            }
            // essa função cria a expansão variavel do span para cada IMG presente 
        };
        $('.slider img').eq(0).fadeIn();
        setInterval(function(){
            alternarSlider();
        },delay)
        
    };

    function alternarSlider (){
        $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
        //utilizamos o STOP para parar a animação depois de ocorrer
        indiceAtual++;
        if(indiceAtual == indiceMaximo){
            indiceAtual = 0;
        }
        $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
        $('.bulletnav span').css('background-color','#ccc');
        $('.bulletnav span').eq(indiceAtual).css('background-color','#069')
    };

    function clickSlider() {
        $('.bulletnav span').click(function(){
            $('.slider img').eq(indiceAtual).stop().fadeOut(2000);
            indiceAtual = $(this).index();
            $('.slider img').eq(indiceAtual).stop().fadeIn(2000);
            $('.bulletnav span').css('background-color','#ccc');
            $(this).css('background-color','#069')
        });
    };
});
