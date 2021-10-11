import {funcoes} from "./funcoes.js";

const button = document.getElementById('button');
button.addEventListener("click", tpascal);

function tpascal(){
    const quantidaden = document.getElementById('quantidade')
    const quan = quantidaden.value
    if(quan.length == 0){
        console.log('Erro')
        inicialModal('modal-erro')
    }else{
        console.log(quan)
        console.log(funcoes.fatorial(quan))
        console.log(funcoes.combinacoes(quan,3))
    }
}

function inicialModal(modalID){
    const modal = document.getElementById(modalID)
    if(modal){
        modal.classList.add('mostrar');
        modal.addEventListener('click', (evento) => {
            if(evento.target.id == modalID || evento.target.className == 'fechar'){
                modal.classList.remove('mostrar')
            }
        })
    }
}
const button_modal = document.getElementById('teste-modal')
button_modal.addEventListener("click", () => inicialModal('modal-erro'))