window.onload = function (){
    const items = [
        {
            id: 0,
            nome: 'camiseta',
            img: 'image.png',
            quantidade: 0
        },
        {
            id: 1,
            nome: 'sapato',
            img: 'image.png',
            quantidade: 0
        },
        {
            id: 2,
            nome: 'calça',
            img: 'image.png',
            quantidade: 0
        },
    ]
    inicializarLoja = () => { //forma de dizer uma função nova
        var containerProdutos = document.getElementById('produtos')
        items.map((val)=>{
            containerProdutos.innerHTML+= `
                <div class="produto-single">
                    <img style="width:100px;height:100px;" src="`+val.img+`"/>
                    <p>`+val.nome+`</p>
                    <a key="`+val.id+`" href="#">Adicionar ao Carrinho!</a>
                </div>
            `;
        })
    }
    inicializarLoja();

    atualizarCarrinho = () => {
        var containerCarrinho = document.getElementById('carrinho')
        containerCarrinho.innerHTML = "";
        items.map((val)=>{
            if (val.quantidade > 0){
                containerCarrinho.innerHTML+= `
                    <p>`+val.nome+` | Quantidade:`+val.quantidade+`</p>
                    <hr>
                `;
            }
        })
    }

    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++){
        links[i].addEventListener('click', function(){
            let key = this.getAttribute('key');
            items[key].quantidade++;
            atualizarCarrinho();
            return false;
        })
    }
}