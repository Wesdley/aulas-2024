$(function(){
    /* $('a').click(function(){
        $('.teste').css('display','block')
        // return false; utilizamos o return false ou preventDefault (acho que é assim que se escreve) para que não reinicie a pagina e faça aparecer
    });
    
    $('a').click(function(){
        console.log('Alo')
        return false;
    }); */ // esse evento so funciona se a tag estiver a cima * alguns podem acontecer depois por conta de click, timeout etc...
    /* $('body').on('click','a', function(){ // usado para pegar o evento idependente do momento
        alert('ola mundo')
    })
    setTimeout(function() {
        $('body').html('<a href="">Here JS</a>');
    }, 3000); */

    var func = function (){
        $(this).css('background','green'); // vai pegar o eleemento de referencia
        // console.log($(this).index());
        $('input[type=text').eq($(this).index()).css('background','green'); //mesma forma de dizer do de cima
    }
    $('input').keyup(func); // keyup = quando a tecla sobe
    // podemos usar o keydown 
    
});