$(function(){
    $.ajax({
        'url':'conteudo.html',
        // 'method':'post', // usado mais no backend, faz uma requisição. Podendo ser post ou get.
        // 'data':{'nome':'guilherme','idade','23'}, serve para enviar valores, itens de um formulario podendo ser pego por inputs. 
    }).done(function(data){ // função usada para manipular o resultado. 
        // console.log(data) // tratando da maneira que a gente quiser
        $('#container').append(data);
    });
})