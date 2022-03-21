let btnCorrida = document.getElementById('btn-corrida');
let char = document.querySelector('.char');
let squir = document.querySelector('.squir');
let btnRestart = document.getElementById('btn-restart')
let charizard = document.getElementById('chari');
let mensagem = document.getElementById('bloco-vitoria');
let blastoise = document.getElementById('blas');
let textoVitoria = document.getElementById('texto-vitoria');

btnCorrida.addEventListener('click', corram);
btnRestart.addEventListener('click', reset);


char.style.marginLeft = '1px';
squir.style.marginLeft = '1px';
function corram () {
    char.style.marginLeft = parseInt(char.style.marginLeft) + Math.random()*100 + 'px';
    squir.style.marginLeft = parseInt(squir.style.marginLeft) + Math.random()*100 + 'px';

    if((window.innerWidth - document.getElementsByClassName('img')[0].width) <= parseInt(char.style.marginLeft)) {
        charizard.style.display = 'inline';
        mensagem.style.display = 'inline';
        textoVitoria.innerText = 'VITÓÓÓÓÓRIAAA DO MELHOOOR CHARIZARD DE TODOSSSSS!!! XUUUPAAA SQUIRTLE !!'
    }
    
    if(window.innerWidth - document.getElementsByClassName('img')[0].width <= parseInt(squir.style.marginLeft)) {
        blastoise.style.display = 'inline';
        mensagem.style.display = 'inline';
        textoVitoria.innerText = 'VITÓÓÓÓÓRIAAA DO PIOR BLASTOISE DE TODOSSSSS!!! CHARMANDER, VOCÊ MERECIA !!'
    }
}

function reset() {
    char.style.marginLeft = '1px';
    squir.style.marginLeft = '1px';
    charizard.style.display = 'none';
    blastoise.style.display = 'none';
    mensagem.style.display = 'none';
}



 