const produtos = [
    {
        nome: "Notebook Gamer",
        descricao: "Notebook com alto desempenho para jogos e trabalho.",
        preco: "R$ 3.500,00"
    },

    {
        nome: "Smartphone Pro",
        descricao: "Celular moderno com câmera de alta qualidade.",
        preco: "R$ 2.200,00"
    },

    {
        nome: "Headset Bluetooth",
        descricao: "Fone sem fio com excelente qualidade sonora.",
        preco: "R$ 300,00"
    },

    {
        nome: "Teclado Mecânico",
        descricao: "Teclado gamer com iluminação RGB.",
        preco: "R$ 450,00"
    },

    {
        nome: "Mouse Gamer",
        descricao: "Mouse ergonômico com alta precisão.",
        preco: "R$ 150,00"
    }
];


function carregarProdutos(){

    const lista = document.getElementById("listaProdutos");


    if(lista){

        produtos.forEach(produto => {

            lista.innerHTML += `

            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">

                <div class="card h-100 shadow">

                    <div class="card-body">

                        <h5 class="card-title">
                            ${produto.nome}
                        </h5>

                        <p class="card-text">
                            ${produto.descricao}
                        </p>

                        <h6>
                            ${produto.preco}
                        </h6>

                        <button class="btn btn-primary">
                            Comprar
                        </button>

                    </div>

                </div>

            </div>

            `;

        });

    }

}


window.onload = carregarProdutos;
