$(function(){
    //var frase = "Ola mundo"
    //var verifica = frase.match(/^(.*?)@(.*?)$/); // precisa ser exatamente o que esta escrito, e o match vai poder encontrar. // podemos colocar [A-Za-z0-1] para procurar de acordo com o os numeros e letras podemos procurar tb por sequencias [a-z]{3} podemos tb decidir quantos queremos [3,6]
    // quando utilizar (.*?)@ significa que vai pegar tudo o que tem até onde decidirmos exemplo ate o @
    // ^ Garante que começe do inicio
    // $ Garante que vai até o final
    // console.log(verifica)
    // if(verifica != 'null'){
    //     console.log('Encontramos algo')
    // }else{
    //     console.log("Não encontramos nada")
    // }
    abrirjanela();
    fecharjanela();
    function abrirjanela(){
        $('.btn').click(function(e){
            e.stopPropagation(); // para a propagação 
            $('.bg').fadeIn();
            // podemos usar o SHOW para mostrar 
            // podemos usar HIDE para esconder
        });
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
    $('.form').submit(function(){
        //Se chegar até o final é pq esta tudo certo
        var nome = $('input[name=Nome]').val();
        var email = $('input[name=Email]').val();
        var telefone = $('input[name=Telefone]').val();
        if(verificarNome(nome) == false){
            aplicarCampoInvalido($('input[name=Nome]'));
            return false;
            // vai verificar se o nome vai estar preenchido 
        }else if(verificarTelefone(telefone) == false){
            aplicarCampoInvalido($('input[name=Telefone]'));
            return false;
        }else if(verificarEmail(email) == false){
            aplicarCampoInvalido($('input[name=Email]'));
            return false;
        }else{
            alert("Formulário enviado")
        }
        function verificarNome(nome){
            if(nome == ''){
                return false;
            }
            // contando a quantidade de espaço e os respectivos valores.
            var amount = nome.split(' ').length; 
            var stringStr = nome.split(' ');
            if (amount >= 2){
                // split separa a string
                // length para ver os valores
                for (var i = 0; i < amount; i++ ){
                    if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                        console.log("S")
                    }else{
                        //aplicarCampoInvalido($('input[name=nome]'));
                        return false;
                    }
                }
            }else{
                //aplicarCampoInvalido($('input[name=nome]'));
                return false;
            }
            function verificarTelefone(telefone){
                if(telefone == ''){
                    return false;
                }
                if(telefone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/) == null){
                    // {2} serve para dizer quantos caracteres precisa
                    return false;
                }
            }
            verificarTelefone();
            function verificarEmail(email){
                if (email == '') return false;
                if (email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
                    return false;
                }

                // {1,} serve para que seja quantos caracteres quiser
                // + serve para juntar a expressão com o que vem depois 
            }
            verificarEmail();
            $('input[type=text]').focus(function(){
                resetarCampoInvalido($(this));
            });
        };
        function aplicarCampoInvalido(el){
            el.css('border','2px solid red');
            el.css('color','red')
            //el.data('invalido','true');
            el.val('Campo Inválido')
        }
        function resetarCampoInvalido(el){
            el.css('border','1px solid #cccccc');
            el.css('color','black')
            //el.data('invalido','false');
            el.val('')
        }
    });
});
