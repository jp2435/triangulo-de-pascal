import {funcoes} from "./funcoes.js";

const button = document.getElementById('button');
button.addEventListener("click", tpascal);

function tpascal(){
    const quantidaden = document.getElementById('quantidade')
    const quan = quantidaden.value
    if(quan.length == 0){
        console.log('Erro')
    }else{
        console.log(quan)
        console.log(funcoes.fatorial(quan))
        console.log(funcoes.combinacoes(quan,3))
    }
}