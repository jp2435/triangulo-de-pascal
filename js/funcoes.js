function fatorial(a){
    if(a==0){
        return a+1
    }else{
        for(let b=a-1; b>1; b--){
            a*=b;
        }
        return a
    }
}
function combinacoes(a,b){
    let combinacao = (fatorial(a))/(fatorial(a-b)*fatorial(b));
    if(!Number.isInteger(combinacao)){ //Caso o valor tenha casa decimais, ira sofrer um tratamento
        const decimal = combinacao - Math.trunc(combinacao)
        if(decimal>0.1){
            combinacao = Math.trunc(combinacao) + 1
        }else if(decimal<0.1){
            combinacao = Math.trunc(combinacao)
        }
    }
    return combinacao;
}

export const funcoes ={
    fatorial,
    combinacoes
}