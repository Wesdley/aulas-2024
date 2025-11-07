// var variavel global
// let variavel no escopo (local)
// const constante (não pode ser alterada)

var nome = "Luiz";
console.log("Ola " + nome);

var nome = "Edu";
console.log("Ola " + nome);

const idade = 20;
console.log(idade);

/* idade = 21;
console.log(idade);*/

{
    let altura = 180;
    console.log(altura + "cm");
}
console.log(altura); // não vai funcionar pois ela foi declarada dentro de um escopo