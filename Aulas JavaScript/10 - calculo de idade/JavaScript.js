var ano_nasc = prompt("Qual seu ano de nascimento?");
var ano_atual = new Date().getFullYear();

// pequena validação para evitar erros de idade
while (ano_nasc > ano_atual) {
    console.log("Ano de nascimento invalido");
    var ano_nasc = prompt("Qual seu ano de nascimento?");
}

var idade = ano_atual - ano_nasc;
console.log(`Voce tem ${idade} anos`);