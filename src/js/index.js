/*
OBJETVIO 1 - quando clicarmos na seta  de avançar temos que mostrar o proximo cartao da lista:

- passo 1: dar um jeito de pegar os elementos html  da seta avançar 
-  passo 2: dar um jeito de  identificar o clique do usuario  na seta avançar 
- passo 3: fazer aparecer  o proximo cartao da lista
- passo 4: buscar o cartao que esta selecionado e esconder


OBJETIVO 2: quando clicamos na seta  de voltar temos que mostrar o cartao anterior da lista 

- passo 1:  dar um jeito de pegar  o elemento html  da seta voltar 
- passo 2:  dar um jeito de identificar o clique do usuario na seta voltar
- passo 3: fazer aparecer o carto anterior  na lista 
- pass0 4: buscar o cartao que esta seta selecionado e esconder

 */

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function () {
    const ehUltimoCartao = cartaoAtual === cartoes.length - 1;
  if (ehUltimoCartao) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao();
});

// objetivo 2:
btnVoltar.addEventListener("click", function (){ 
    const ehPrimeiroCartao = cartaoAtual === 0;
    if(ehPrimeiroCartao) return;

    esconderCartaoSelecionado();

    cartaoAtual --;
   mostrarCartao();
})
function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecinado");
}

