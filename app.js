let numerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirMensagemInicial();

function imprimirTextoNaTela (tag, texto){
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}
function verificarChute(){
    let chute = document.querySelector('input').value;
     if (chute == numeroSecreto){
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        imprimirTextoNaTela('h1','Acertou');
        imprimirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

        
     } else {
        if (chute < numeroSecreto) {
            imprimirTextoNaTela('h1', 'Escolha um número maior');
        } else {
            imprimirTextoNaTela('h1', 'Escolha um número menor');
        }
        tentativas ++;
        limparCampoChute();
     }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = numerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        numerosSorteados = [];
    }
    if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

    
}
function limparCampoChute() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampoChute();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
        
}
function exibirMensagemInicial() {
    imprimirTextoNaTela('h1', 'Jogo do Número Secreto');
    imprimirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    

}


