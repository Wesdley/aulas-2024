// tentativa de pegar o valor por fora, mas não funciona var nome = alert(prompt("Qual seu nome?").value);
function Pessoas() {
    this.nome = nome;
    this.idade = 24;
    this.altura = 1.86;
}

var pessoas = new Pessoas();

console.log(pessoas.nome, pessoas.idade, pessoas.altura);