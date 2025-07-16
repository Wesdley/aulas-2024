$(function (){
    var CurentValue = 0;
    var isDrag = false;
    var preco_Maximo = 70000;
    var preco_Atual = 0;
    // como o jquery não tem função nativa para o precionar do mouse utilizaremos um macete onde o botão sera precionado e assim ativara

    // pressionar do botão para baixo
    $('.pointer-barra').mousedown(function(){
        //console.log('pressionado')
        isDrag = true;
        console.log('apertei')
    });

    // quando soltar o botão do mouse
    $(document).mouseup(function(){
        isDrag = false;
        console.log('soltei')
        enableTextSelection();
    });

    // vai por o mouse para mover o elemento
    $('.barra-preço').mousemove(function (e){
        console.log('movi');
        if(isDrag){
            disableTextSelection();
            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;

            if(mouseX < 0){
                mouseX = 0;
            }

            if(mouseX > elBase.width()){
                mouseX = elBase.width();
            }
               
            $('.pointer-barra').css('left',(mouseX-13)+'px');
            CurentValue = (mouseX / elBase.width()) * 100;
            $('.barra-preco-fill').css('width', CurentValue+'%');
            preco_Atual = (CurentValue / 100) * preco_Maximo;
            $('.preco_pesquisa').html('R$'+preco_Atual);
        };
    });

    function disableTextSelection(){
        $('body').css("-webkit-user-select","none");
        $('body').css("-moz-user-select","none");
        $('body').css("-ms-user-select","none");
        $('body').css("-o-user-select","none");
        $('body').css("user-select","none");
    }

    function enableTextSelection(){
        $('body').css("-webkit-user-select","none");
        $('body').css("-moz-user-select","none");
        $('body').css("-ms-user-select","none");
        $('body').css("-o-user-select","none");
        $('body').css("user-select","none");
    }

    // arrumar os preços 
   
});