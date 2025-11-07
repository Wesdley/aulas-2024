function teste () {
    // executado quando chamar a função
    console.log("Ola mundo");
}

teste();

function teste2 (nome,idade) {
    // executado quando chamar a função
    console.log("Ola " + nome);
    console.log("Ola " + idade);
}

teste2("Wesdley", 24);
teste2("Guilherme", 40);

function PegarNome () {
    return "Arthur"; // retorna e finaliza a função 
}

nome1 = PegarNome();
console.log("Ola " + nome1);

function Par(parametro) {
    if (parametro == 1) {
        return "Rute";
    } else {
        return "Guilherme";
    }
}

nome3 = Par(1);
console.log("Ola " + nome3);