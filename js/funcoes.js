function fatorial(a){
    for(let b=a-1; b>1; b--){
        a*=b;
    }
    return a
}
function combinacoes(a,b){
    const combinacao = (fatorial(a))/(fatorial(a-b)*fatorial(b));
    return combinacao;
}

export const funcoes ={
    fatorial,
    combinacoes
}