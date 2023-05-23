function setup() {
  createCanvas(400, 400);
  cadastrar();
}

function draw() {
  background(220);
}

function cadastrar() {
        // obtém o formulário de cadastro
        var formCadastro = document.getElementById("form-cadastro");

        // redireciona o usuário para a nova página
        window.location.replace("cadastro.html");
  }