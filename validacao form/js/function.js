$(function(){
    abrirJanela();
    fecharJanela();
    function abrirJanela(){
        $('#btn').click(function(e){
            e.stopPropagation();
            $('.form-bg').fadeIn();
        });
    };
    function fecharJanela(){
        var el = ('body');
        el.click(function(){
            $('.form-bg').fadeOut();
        });
        $('.form').click(function(e){
            e.stopPropagation();
        });
    };
    $('.form').submit(function(){
        var nome = $('input[name=nome]').val();
        var email = $('input[name=email').val();
        var telefone = $('input[name=telefone]').val();
        if (verificarNome(nome) == false){
            campoInvalido($('input[name=nome]'));
            return false;
        }
    });
    function verificarCampo(nome){
        if(nome == ''){
            return false;
        };
        var amount = nome.split(' ').length;
        var stringStr = nome.split(' ');
        if (amount >= 2){
            for(var i = 0; i < amount; i++)
                //continuar a validaçao do form nome
        };
    };
    
    function campoInvalido(el){
        el.css('border','2px solid red');
        el.css('color','red');
        el.val('Campo Invalido');
    };
});