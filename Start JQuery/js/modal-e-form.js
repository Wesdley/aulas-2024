$(function(){
    abrirjanela();
    fecharjanela();
    function abrirjanela(){
        $('.btn').click(function(e){
            e.stopPropagation(); // para a propagação 
            $('.bg').fadeIn();
            // podemos usar o SHOW para mostrar 
            // podemos usar HIDE para esconder
        })
    };
    function fecharjanela(){
        var el = $('body, .close-btn'); // separamos por virgula para seprar o elemento 
        el.click(function(){ // fazemos com que o body feche, porém precisamos que ao clicar no form não o feche tb
            $('.bg').fadeOut(); // para fazer o efeito de transição
        });
        $('.form').click(function(e){ //fazemos com que o form não feche ao clicar nele, coisa que ocorria antes.
            e.stopPropagation(); // para parar a propagação quando for acionado 
        });
    };
});