let precoUnitario = 1.00; // Preço unitário do item
let numeroAtual = 0; // Quantidade inicial

function alterarNumero(valor) {
  // Atualiza a quantidade
  numeroAtual += valor;

  // Impede que o número fique negativo
  if (numeroAtual < 0) {
    numeroAtual = 0;
  }

  // Atualiza o número exibido no <p>
  document.querySelector(".numero").textContent = numeroAtual;

  // Calcula o valor total
  let precoTotal = numeroAtual * precoUnitario;

  // Atualiza o valor exibido no total
  document.querySelector(".valor").textContent = precoTotal.toFixed(2);
}

function ChamarInputs() {
  // Obtendo os valores dos inputs
  let nome = document.getElementsByClassName("Nome")[0].value;
  let endereco = document.getElementsByClassName("Endereco")[0].value;
  let telefone = document.getElementsByClassName("Telefone")[0].value;

  // Verificando as condições
  if (nome.length >= 4 && endereco.length >= 10 && telefone.length >= 8) {
    console.log("Nome:", nome); // Exibe o nome no console

    // Atualiza o conteúdo do NomeUser com o nome do usuário
    const iconeTela = document.querySelector(".IconeTela");
    const nomeUser = document.querySelector(".NomeUser");
    nomeUser.textContent = `Bem-vindo, ${nome}!`;

    // Exibe a div IconeTela
    iconeTela.style.display = "flex";
    iconeTela.style.flexDirection = "column"; // Organização vertical
    iconeTela.style.alignItems = "center"; // Centraliza os itens horizontalmente
  } else {
    alert("Por favor, preencha todos os campos corretamente.");
  }
}
  
function FecharIconeTela() {
    // Esconde a div IconeTela
    document.querySelector(".IconeTela").style.display = "none";
  }