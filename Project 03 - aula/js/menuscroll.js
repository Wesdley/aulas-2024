$(function(){
    $('nav a').click(function (){
        var href = $(this).attr('href'); // fazemos um atributo para o href ( de cada elemento por isso usamos this )
        var OffSetTop = $(href).offset().top; // criamos um scroll do top para a pagina

        $('html, body').animate({'scrollTop':OffSetTop})
        //scrollTop é um valor do animate e utilizamos ele para pegar o valor do offset, que o mesmo está pegando o valor do href no html

        return false; //para os links não efetuar o carregamento da pagina
    });
});