window.onload = function(){
    //continue = tira o numero por exemplo e continua
    //break = vai parar no numero que você escolheu
    // dentro do if vc pode usar || para poder adicionar outra especificação
    /* for(var i = 0; i <= 10; i++){
        if(i == 3) {
            break;
        }
        console.log(i);
    } */

    //while precisa declarar a var antes de utlizalo 
    var n = 0;
    while(n < 10) {
        console.log(n);
        //caso o consol.log esteja em cima ele printara o 5, caso esteja em baixo ele não vai printar o 5
        if(n == 5){
            break;
        }
        n++;
    }
}