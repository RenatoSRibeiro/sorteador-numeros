function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];

    for (let i = 0; i < quantidade; i++) {
        let numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }
    
    console.log(`Quantidade de números: ${quantidade}`);
    console.log(`Do número: ${de}`);
    console.log(`Até o número: ${ate}`);
    console.log(`Números Sorteado: ${sorteados}`);

    exibirTextoNaTela('#resultado', sorteados);
}

function obterNumeroAleatorio(min, max) {
    return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}

function exibirTextoNaTela (IdLabel, IdResultado){
    let campo = document.querySelector(IdLabel);
    campo.innerHTML = IdResultado;
}
