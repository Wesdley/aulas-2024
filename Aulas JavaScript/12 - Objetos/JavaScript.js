// um array var array = [guilherme, 20,  1.80]

/*
var objeto = {
    nome: "",
    idade: "",
    altura: ""

    // para passar valores vazios temos que utilizar as aspas duplas
}

// teste fora da aula!

objeto.nome = prompt("Escreva seu nome");
objeto.idade = prompt("Escreva sua idade");
objeto.altura = prompt("Escreva sua altura");
console.log(objeto.nome);
console.log(objeto.idade);
console.log(objeto.altura);

*/

// nesse caso é um pouco diferente pq se torna um array de objetos

var pessoas = [{
    nome: "Wesdley",
    idade: 24,
    altura: 1.86
},{
    nome: "Cristina",
    idade: 24,
    altura: 1.76
}]

// para chamar também é diferente, caso contrario apresentaria um erro undefined

console.log(pessoas[0].nome); // temos que passar o seu array para acessar os valores dentro
console.log(pessoas[0].idade);
console.log(pessoas[0].altura);
console.log(pessoas[1].nome);
console.log(pessoas[1].idade);
console.log(pessoas[1].altura);