import ValidaCPF from './ValidaCPF.js'; // tem acesso a tudo do modulo validaCPF>

export default class GeraCPF {

    // gera um numero aleatório de 9 digitos. Ex: 485732694
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * max - min + min)); // nenhum numero pode iniciaro com 0(), ent transformamos em string
    }

    formatCPF(cpf) {
        return (
            cpf.slice(0,3) + '.' + // fatiar cpf e adicionar no meio das fatias '.'
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    // Criando nova função para gerar um cpf novo com os 9 digitos do rand(); Utiliza métodos do validaCPF.

    geraNovoCpf() {
        const cpfSemDigito = this.rand(); // gera numero aleatorio de 9 digitos
        const digito1 = ValidaCPF.geraDigito(cpfSemDigito);  // passa cpf aleatorio para gera digito o método estatico gera digito
        const digito2 = ValidaCPF.geraDigito(cpfSemDigito + digito1); // mandamos cpf sem digito, acrescentado do seu primeiro digot
        const novoCpf = cpfSemDigito + digito1 + digito2; // cria novo cpf
        return novoCpf; // função retorna novo cpf

    }

   

 
}