/*window.onload = function(){
    var nome = "João";
    // == -> apenas o valor precisa ser igual
    // === -> a variavel e o valor precisam ser do mesmo tipo
    // != -> diferente
    // !== -> diferente de valor e tipo
    // >=
    // <=
    // >
    // <
    if(nome == 'guilherme'){
        alert("Condição Guilherme")
    }else if(nome == 'João'){
        alert("Condição João")
    }else{
        alert("Condição falsa")
    }
}

window.onload = function(){
    var idade = 2024 - 2001

    if(idade > 23){
        console.log("Eu tenho mais de 23 anos de idade")
    }else{
        console.log("Eu sou menor ou igual 23 anos de idade")
    }
}*/

// laço de repetição faz o codigo mais de 1x

window.onload = function() {
    /* var repeticao = 0;
    var nome = "Wesdley"
    while(repeticao < 5) { // while precisa de uma variavel inicial para poder funcionar 
        console.log("Ola mundo"+repeticao);
        repeticao+=1; // da para usar ++
    }
    console.log("cheguei até o final")

    while(nome == "Wesdley") {
        console.log("Ola Wes")
        nome = 'Mauro'
    } 

    //for é mais usado para numeros

    for(var numero = 0; numero < 10; numero++){
        console.log("Ola mundo")
    }

    // o Do sempre faz o comando primeiro e depois a verificação

    do {
        console.log("Ola mundo")
    }while(nome == "Guilherme")
    var test = "Wesdley"
    //Essa var por estar dentro da function pai ela pode ser usada na function abaixo

    // forma de criar a minha função
                            // server para colocar parametros
    function realizarconta(num1, num2){
        console.log(num1);
        console.log(num2+num1);
        if(num1 == 10) {
            console.log("Meu num1 e igual a 10")
        }
        console.log(test)
        //podendo modificar o codigo dentro da function
        test = "joão"
        console.log(test)
    }
    // colocamos nossos parametros
    realizarconta(10, 20);

    function realizarconta (num1, num2){
        return num1+num2;
    }

    var resultado = realizarconta(10,40);
    console.log(resultado);

    var variavel = function() {
        console.log("Minha função da variavel")
    }

    variavel();

    //podemos colocar uma função dentro de uma variavel e chamala 

    var obj = {'nome':'Wesdley','idade':'23'}
    console.log(obj.nome)
    obj.func = function(){
        console.log('minha funcao')
    }

    obj.func();

    var variavel = [];
    variavel[0] = "wesd";
    variavel[0][2] = 'ijkij';
    console.log(variavel[0][2]);

    //tanto para obj e array da para criar um dentro do outro*/
}