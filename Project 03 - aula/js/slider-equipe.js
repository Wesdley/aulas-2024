$(function(){
    initSlider();
    autoplay();
    var delay = 3000; // colocamos o tempo do slide
    var curIndex = 0; // colocamos a onde vai iniciar no caso 0
    var amt;
    function initSlider(){
        amt = $('.sobre-autor').length; // servindo para pegar a quantida de divs dentro do nosso elemento
        var sizeContainer = 100 * amt; // calculo para saber quantos elementos precisariam ser colocado dentro do nosso slide exemplo: 100 * 3 divs utilizando o length
        var sizeBoxSingle = 100 / amt;
        $('.sobre-autor').css('width',sizeBoxSingle+'%');
        $('.scroll-wraper').css('width',sizeContainer+'%');

        for(var i = 0; i < amt; i++) {
            if(i == 0 )
                $('.slider-bullets').append('<span style="background-color:rgb(150,150,150);"></span>')
            else
                $('.slide-bullets').append('<span></span>')
        }
    }

    function autoplay(){
        setInterval(function(){
            curIndex++
            if(curIndex == amt)
                curIndex = 0;
            goToSlider(curIndex);
        },delay)
    }

    function goToSlider(curIndex){
        var offSetX = $('.sobre-autor').eq(curIndex).offSet().left;
        $('.scroll').animated({'scrollLeft':offSetX});
    }
});