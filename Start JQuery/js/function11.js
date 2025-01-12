$(function(){
    $('#contato').submit(function(){
        // var input = $('#contato input[type=text]');
        var container = $('.container'); // chamamos o container para ser utilizado 
        var content = 'Nome: ' + $('input[name=nome]').val() +
        '<hr>Email: ' + $('input[name=email]').val() + 
        '<hr>Telefone: ' + $('input[name=telefone]').val();
        // pegamos os valores dentro do input colocando entre os + para poder adicionar string com parametros
        // hr serve para dar uma quebra de linha com uma borda por baixo 
        container.html(content);
        return false; // ou event.preventDefault(); para evitar o evento de reset da pagina
    })
})

// para pegar valores dentro do formularios e dar imprint em algo.