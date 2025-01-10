$(function(){
    $('input[type=button]').click(function(){
        var v = $('input[type=text]').val(); //val lembrar que mostra valores val = valores
        // var v2 = v.split('@'); separa com base na caractere dentro, dando variantes de string
        // console.log(v.substr(1,4)) substr vai recortar a string dentro dela mesma exemplo 1,4 vai pegar do nome "Wesdley" apenas "esdl" prof disse util, mas para que? i dont know. UTIL PARA SEPARAR OS EMAILS EXISTENTES !!! 

        /* var splitstr = v.split('@');
        if(splitstr[1] == 'hotmail.com'){ // vai pegar de acordo com a nossa necessidade 
            $('input[type=text]').css('opacity','0')
        }else {
            console.log('Deu errado')
        } */
       
        console.log(v.trim());
    });
});