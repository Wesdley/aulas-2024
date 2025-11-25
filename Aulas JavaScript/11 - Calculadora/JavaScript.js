var n1 = prompt("Digite o primeiro numero");

var operador = prompt("Digite o operador");

while (operador != "+" && operador != "-" && operador != "*" && operador != "/") {
    alert("Operador invalido");
    operador = prompt("Digite o operador");
}

var n2 = prompt("Digite o segundo numero");

// convertemos nossa string para números
n1 = parseFloat(n1);
n2 = parseFloat(n2);
// também podemos utilizar o parseInt para números inteiros! 

var resultadoFinal = 0;

if (operador == "+") {
    resultadoFinal = Number(n1) + Number(n2);
} else if (operador == "-") {
    resultadoFinal = Number(n1) - Number(n2);
} else if (operador == "*") {
    resultadoFinal = Number(n1) * Number(n2);
} else if (operador == "/") {
    resultadoFinal = Number(n1) / Number(n2);
}

alert(`O resultado da operacao foi ${resultadoFinal}`);


