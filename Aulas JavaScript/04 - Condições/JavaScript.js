var nome = "Wesdley";
var idade = 24;

if (nome == "Wesdley") {
    console.log("Ola " + nome);
} else if (nome == "Marta") {
    console.log("Ola "+ nome);
} else {
    console.log("Ola desconhecido");
}

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

if (nome == "Wesdley" && idade == 24) {
    console.log("Wesdley tem 24 anos");
}

if (nome != "Guilherme") {
    console.log("Ola Guilherme");
}

if (nome == "Wesdley" || idade == 24) {
    console.log("Wesdley tem 24 anos");
}