$(function(){
    $('.box5').addClass('aba'); // podemos adicionar a class
    // $('.aba').remove(); e tb podemos remover a class
    $('.box5').removeClass('aba'); // podemos utilizar desta forma tb para remover a class
    $('.box5 .child2').css('color','red') // existe uma tag chamada "find" para localizar o elemento, mas sinceramente parece ser inutil
    $('minhatag').attr('meuattr','outrovalor')// o attr serve para pegarmos um valor dentro de uma string com caracteristicas attr, ao separar por virgula podemos adicionar um outro valor para o attr
    //alert($('minhatag').attr('meuattr')) // ao chamalo tera o valor selecionado 
});