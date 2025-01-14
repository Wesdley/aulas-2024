$(function(){
    /* $('.box5').fadeOut(2000,function(){ // vai  tirar a box 5
        $('.box4').fadeIn(3000,function(){ // vai aparecer a box 4
            console.log('fim')
        })
    });*/

    $('.box5').click(function(){
        $('.box4').slideToggle(1000,function(){ // podemos colocar um timer para a ocorrencia do evento + uma função
            console.log('slideToggle')
        }); // de cima para baixo
    })
});