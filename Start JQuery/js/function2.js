//como manipular o css pelo jquery
$(function(){
    //$('#teste').css('background-color','#809080').css('padding-left','40px');
    //pode chamar como no css atacando a class
    //pode colocar  qualquer tag do css,mas tem limitações como o padding: 20px 30px 20px 30px
    setTimeout(function(){
        $('#teste p').css('background-color','red')
        //se eu não colocar um valor vai pegar o valor
    }, 2000);
});