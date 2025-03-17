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
}

function obterNumeroAleatorio(min, max) {
    return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}



// criar uma váriavel chamada sorteados e incluir o array dentro da função sortear
//Criar um loop para que seja verificado a quantidade de números que serão sorteados.
//Dentro do loop atribuir a função de obter números aleatórios e passar o parametro
//  esperado e incluir os números no array usando o push.