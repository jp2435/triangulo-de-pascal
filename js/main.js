import {funcoes} from "./funcoes.js";

const button = document.getElementById('button');
button.addEventListener("click", tpascal);
let div_resultado = document.getElementById('div-resultado')

function tpascal(){
    const quantidaden = document.getElementById('quantidade')
    const quan = quantidaden.value
    if(quan.length <= 0){
        inicialModal('modal-erro')
    }else{
        inicialModal('modal-resultado')
        for(let i=0; i<=quan; i++){
            if(document.getElementById(`linha-${i}`) == null){
                let span = document.createElement("span")
                let br = document.createElement("br")
                span.setAttribute("id", `linha-${i}`)
                span.setAttribute("class", "linhas")
                br.setAttribute("class", "linhas-br")
                div_resultado.append(span)
                div_resultado.append(br)
            }
            let contagem = 0
            while(contagem <= i){
                if(contagem == 0){
                    let texto_span = document.createTextNode(`${funcoes.combinacoes(1,1)}`)
                    document.getElementById(`linha-${i}`).appendChild(texto_span)
                }else if(contagem != 0){
                    document.getElementById(`linha-${i}`).innerHTML += ` ${funcoes.combinacoes(i,contagem)}`
                }
                contagem += 1
            }
        }
    }
}

function inicialModal(modalID){
    const modal = document.getElementById(modalID)
    if(modal){
        modal.classList.add('mostrar');
        modal.addEventListener('click', (evento) => {
            if(evento.target.id == modalID || evento.target.className == 'fechar'){
                modal.classList.remove('mostrar')
                for(let i = document.getElementsByClassName('linhas').length-1; i>=0;i--){
                    document.getElementsByClassName('linhas')[i].remove()
                    document.getElementsByClassName('linhas-br')[i].remove()
                }
            }
        })
    }
}