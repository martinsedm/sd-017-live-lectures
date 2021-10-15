// rainha
let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;

// inimigo
let posicaoPecaLinha = 3;
let posicaoPecaColuna = 2;

let rainhaVenceu = false;

if(posicaoRainhaColuna === posicaoPecaColuna){
    rainhaVenceu = true;
}

if(posicaoRainhaLinha === posicaoPecaLinha){
    rainhaVenceu = true;
}
//diagonal inferior esquerda
for( let i=1 ;i < 8 ; i++ ){
    let diagonalLinhaInimigo = posicaoRainhaLinha -i
    let diagonalColunaInimigo = posicaoRainhaColuna -i

    if(diagonalLinhaInimigo < 1 || diagonalColunaInimigo < 1){
        break;
    }
    console.log('diagonalLinhaInimigo: ', diagonalLinhaInimigo)
    console.log('diagonalColunaInimigo: ', diagonalColunaInimigo)
    console.log('----------------------')

    if( (posicaoPecaLinha  === diagonalLinhaInimigo)  &&  (posicaoPecaColuna === diagonalColunaInimigo)){
           rainhaVenceu = true; 
    }

}

// diagonal superior direta
for( let i=1 ;i < 8 ; i++ ){
    let diagonalLinhaInimigo = posicaoRainhaLinha +i
    let diagonalColunaInimigo = posicaoRainhaColuna +i

    if(diagonalLinhaInimigo < 1 || diagonalColunaInimigo < 1){
        break;
    }
    console.log('diagonalLinhaInimigo: ', diagonalLinhaInimigo)
    console.log('diagonalColunaInimigo: ', diagonalColunaInimigo)
    console.log('----------------------')

    if( (posicaoPecaLinha  === diagonalLinhaInimigo)  &&  (posicaoPecaColuna === diagonalColunaInimigo)){
           rainhaVenceu = true; 
    }

}

if(rainhaVenceu === false){
    console.log('inimigo venceu')
}else{
    console.log('rainha venceu')
}

// 1
////// linha 3 coluna3

// 2
////// linha 2 coluna2

// 1
////// linha 1 coluna1