let pessoa = {
  nome: '',
  idade: 0,
};

const sessaoPrincipal = document.getElementById('principal');
const btnAdiciona = document.querySelector('.btnAdicionar');

btnAdiciona.addEventListener('click', adicionaPessoa);

function criaElemento(objeto) {
  const novoElemento = document.createElement('p');
  novoElemento.innerText = objeto.nome + ' - ' + objeto.idade;

  sessaoPrincipal.appendChild(novoElemento);
}

function adicionaPessoa() {
  pessoa.nome = document.getElementById('nome').value;
  pessoa.idade = document.getElementById('idade').value;

  localStorage.setItem(pessoa.nome, JSON.stringify(pessoa));

  criaElemento(pessoa);
}

window.onload = function () {
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i += 1) {
      let key = localStorage.key(i);
      let objeto = JSON.parse(localStorage.getItem(key));
      criaElemento(objeto);
    }
  }
};
