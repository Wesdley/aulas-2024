nomes = ["joao", "maria", "pedro"];
for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

// vai imprimir um por um dentro do array

// utilizando o ForEach, vai passar por cada elemento

nomes.forEach(function(value, index){
    console.log(value, index);
});

// conseguimos pegar tanto o elemento quanto o seu index    