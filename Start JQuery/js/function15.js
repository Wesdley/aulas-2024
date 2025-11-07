$(function(){
    var el = $('#source .texto').clone(); //clona o elemento
    console.log(el);
    // $('#container').html(el); // coloca o elemento dentro da box
    el.appendTo('#container'); // uma outra forma de colocar dentro do elemento, tambem move o elemento para dentro de outro
    $('#source .texto').appendTo('#container');
    // prependTo colocaria antes do conteudo
    // appenTo move o conteudo para dentro do elemento

});