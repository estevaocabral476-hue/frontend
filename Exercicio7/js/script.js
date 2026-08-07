let produtos = [];


// CARREGAR PRODUTOS SALVOS
function carregarProdutos(){

    const dados = localStorage.getItem("produtos");

    if(dados){

        produtos = JSON.parse(dados);

    }

}


// SALVAR PRODUTOS NO LOCALSTORAGE
function salvarProdutos(){

    localStorage.setItem(
        "produtos",
        JSON.stringify(produtos)
    );

}



// RENDERIZAR PRODUTOS
function renderizarProdutos(lista = produtos){


const area = document.getElementById("listaProdutos");


if(!area) return;


area.innerHTML = "";



lista.forEach(produto => {



area.innerHTML += `

<div class="col-md-4 mb-4">

<div class="card shadow h-100">


<div class="card-body">


<h5>
${produto.nome}
</h5>


<p>
Categoria: ${produto.categoria}
</p>


<p>
Preço: R$ ${produto.preco}
</p>


<p>
Estoque: ${produto.estoque}
</p>


<p>
Status: ${produto.status}
</p>



<button 
class="btn btn-danger"
onclick="excluirProduto(${produto.id})">

Excluir

</button>



<button 
class="btn btn-warning"
onclick="editarProduto(${produto.id})">

Editar

</button>



</div>


</div>

</div>


`;


});


atualizarResumo();


}




// CADASTRAR PRODUTO


const formulario = document.getElementById("formProduto");



if(formulario){


formulario.addEventListener(
"submit",
function(event){


event.preventDefault();


cadastrarProduto();


});


}




function cadastrarProduto(){



let produto = {


id: Date.now(),


nome:
document.getElementById("nome").value,


categoria:
document.getElementById("categoria").value,


preco:
Number(document.getElementById("preco").value),


estoque:
Number(document.getElementById("estoque").value),


status:
document.getElementById("status").value



};



if(produto.nome === ""){

alert("Digite o nome do produto");

return;

}



produtos.push(produto);



salvarProdutos();



alert("Produto cadastrado com sucesso!");



formulario.reset();



}





// EXCLUIR


function excluirProduto(id){


produtos = produtos.filter(

produto => produto.id !== id

);



salvarProdutos();



renderizarProdutos();


}




// EDITAR


function editarProduto(id){


let produto = produtos.find(

p => p.id === id

);



let novoNome = prompt(

"Novo nome:",
produto.nome

);



if(novoNome){


produto.nome = novoNome;


salvarProdutos();


renderizarProdutos();


}


}






// BUSCA


const busca = document.getElementById("busca");


if(busca){


busca.addEventListener(

"keyup",

function(){



let texto = this.value.toLowerCase();



let filtrados = produtos.filter(

produto =>

produto.nome.toLowerCase()
.includes(texto)

);



renderizarProdutos(filtrados);



}

);


}






// RESUMOS


function atualizarResumo(){


let total =
document.getElementById("totalProdutos");


let ativos =
document.getElementById("produtosAtivos");


let valor =
document.getElementById("valorEstoque");



if(total){


total.innerHTML =
produtos.length;


}



if(ativos){


ativos.innerHTML =

produtos.filter(

p=>p.status==="Ativo"

).length;


}



if(valor){


let soma = produtos.reduce(

(total,p)=>

total+(p.preco*p.estoque),

0

);


valor.innerHTML =
"R$ "+soma;


}


}




// INICIAR SISTEMA


carregarProdutos();


renderizarProdutos();
