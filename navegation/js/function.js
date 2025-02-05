$(function () {
    verificarClickMenu();
    function verificarClickMenu () {
        $('a').click(function (event){
            event.preventDefault();
            var href = $(this).attr('href'); //attr serve para coloca o atributo ou colocar multiplos atributos
            $.ajax({
                //faz uma requisição para o sevidor podendo fazer tudo dinamicamente
                'beforeSend': function(){
                    console.log("estamos chamando o befereSen")
                },
                'timeout' :10000, //sempre bom utilizar o timeout
                'url':href,
                'error': function(jqXHR, textStatus, errorThrown){
                    if(jqXHR.statusText == 'Not Found') {
                        alert('Pagina não encontrada')
                    }
                },
                'success': function(data){
                    $('#container').html(data);
                    //$('#container')html('')
                    //$(data).appendTo('#container').fadeIn();
                    //coloca um fadeIn mas buga o codigo
                    //mensagem de erro no codigo em imprint 
                }
            })
            return false;
        })
    }
});

//1138