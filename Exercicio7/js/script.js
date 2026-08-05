const produtos = [

    {
        nome: "Notebook Gamer",
        descricao: "Notebook potente para jogos e estudos",
        preco: "R$ 3500,00"
    },

    {
        nome: "Smartphone Pro",
        descricao: "Celular com câmera de alta qualidade",
        preco: "R$ 2200,00"
    },

    {
        nome: "Headset Bluetooth",
        descricao: "Fone sem fio com ótimo som",
        preco: "R$ 300,00"
    },

    {
        nome: "Teclado Mecânico",
        descricao: "Teclado gamer RGB",
        preco: "R$ 450,00"
    },

    {
        nome: "Mouse Gamer",
        descricao: "Mouse com alta precisão",
        preco: "R$ 150,00"
    }

];



const listaProdutos = document.getElementById("listaProdutos");



produtos.forEach(produto => {


    listaProdutos.innerHTML += `


    <div class="col-md-4 mb-4">


        <div class="card shadow h-100">


            <div class="card-body">


                <h5 class="card-title">
                    ${produto.nome}
                </h5>


                <p class="card-text">
                    ${produto.descricao}
                </p>


                <p>
                    ${produto.preco}
                </p>


                <button class="btn btn-primary">
                    Comprar
                </button>


            </div>


        </div>


    </div>


    `;


});
