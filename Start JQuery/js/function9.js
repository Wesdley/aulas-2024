$(function (){
    $('.box div').eq(1).append('<h3>Ola mundo </h3>'); 
    // "eq" 0 = primeiro; é utilizado para poder pegar qual elemento atacar
    // append serve para adicionar o elemento por ultimo. 
    // Assim como no css podemos selecionar igualmente as divs mesmo que estejam dentro uma da outra.
    var el = $('<h3>Meu Conteúdo</h3>').appendTo($('.box'));
    el.css('color','black');
    // para adicionar um conteudo dentro de uma div e ainda editar o seu css

    $('.box').prepend('<h3> EM CIMA</h3>').css('color','black')
    // prepend adiciona em cima
    var elC = $('<h3>Meu Conteúdo</h3>').prependTo($('.box'));
    elC.css('color','red');
    var t = '<p>meu conteúdo após a div box</p>'
    $('.box').after(t); //depois 
    $('.box').before(t); // antes
    $(t).insertAfter($('.box')).css('color','#848484'); // serve para mudar o css de forma pratica
    $(t).insertBefore($('.box')).css('color','#848484'); //serve para mudar o css de forma pratica
    $('.box').eq(1).remove(); // remove o conteudo 
});