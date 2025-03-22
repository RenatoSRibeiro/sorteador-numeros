function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;
    if (de >= ate) {
        alert('O valor do campo "Do número", não pode ser maior ou igual ao valor do campo "Até o número"');
        alterarStatusBotao();
    } else {
            for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(de, ate);
            return;
            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }

            sorteados.push(numero);

            console.log(`Quantidade de números: ${quantidade}`);
            console.log(`Do número: ${de}`);
            console.log(`Até o número: ${ate}`);
            console.log(`Números Sorteado: ${sorteados}`);
        
            let resultado = document.getElementById('resultado');
            resultado.innerHTML = (`<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`);
        
            alterarStatusBotao();
            
        }
    }


 

}

function obterNumeroAleatorio(min, max) {
    return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').value = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao()
}






