$(function(){
    $('.artigo1').click(function(){
        $('.artigo2').css('background-color','#ccc')
    });
    $('.artigo1').hover(function(){
        $('.artigo2').css('background-color','#908090')
    },function(){
        $('.artigo2').css('background-color','black') //no css já volta para o normal, no js tem que por novamente
    });
    $('textarea').focus(function(){
        console.log('Estou dentro do textarea')
    }).blur(function(){ //usado para quando tirar o foco
        console.log('estou fora') //podemos colocar do lado que funciona da mesma forma
    }); 

    function validarFormulario(){
        $('select').change(function(){
            console.log('meu select foi alterado')
        })
    };
    validarFormulario();
});