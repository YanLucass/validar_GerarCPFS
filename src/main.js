import GeraCPF from './modules/GeraCPF'; // tem acesso a tudo do modulo geraCPF
import './assets/css/style.css';
import ValidaCPF from './modules/ValidaCPF';


// adicionar evento de clique para chamar funções: Executa e gera cpf, indetificando elas pela classe.
document.addEventListener('click', e => {
  const el = e.target;
  if (el.classList.contains('valida')) executaValidacao(e);
  if (el.classList.contains('gerar')) gerarCPF(e);
});

// evento para executar executaValidação apertando enter.
const inputCPF = document.querySelector('#inputCPF');
inputCPF.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    executaValidacao(e);
  }
});

// Função que executa a validação

function executaValidacao(e) {
  e.preventDefault();
  const cpf = document.querySelector('#inputCPF').value;
  const result = document.querySelector('.result');
  const validaCpf = new ValidaCPF(cpf); // manda o cpf do input para o construtor de validaCPF
  
  if(!cpf) {
    result.classList.remove('ok');
    result.classList.add('error');
    result.innerHTML = 'CPF EM BRANCO'
    return
  }
  // valida retorna true 
  if (validaCpf.valida()) {
    result.classList.remove('error');
    result.classList.add('ok');
    result.innerHTML = 'CPF VÁLIDO';
  }
  // valida retorna false
  else {
    result.classList.remove('ok');
    result.classList.add('error');
    result.innerHTML = 'CPF INVÁLIDO';
  }
}

// Função para gerarCPF

function gerarCPF(e) {
  e.preventDefault();
  const gera = new GeraCPF(); // instanciando novo objeto da classe GeraCPF, temos acesso aos seus metodos por meio de "gera"
  const cpfGerado = document.querySelector('.cpf-gerado');

  // caso esteja marcada(checked)
  if (formatarCheckbox.checked) {
    const cpf = gera.geraNovoCpf();  // gera um cpf sem formatação
    cpfGerado.innerHTML = gera.formatCPF(cpf); // utilizamos esse cpf para formatar com o método formartCPF
  } else {
    cpfGerado.innerHTML = gera.geraNovoCpf(); 
  }
}

// Evento change para checar as mudanças da caixinha
const formatarCheckbox = document.querySelector('#formatarCPF');
formatarCheckbox.addEventListener('change', gerarCPF);
