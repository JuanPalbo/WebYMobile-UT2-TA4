function sumAll(a, b){
    let resultado = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++){
        resultado += i;
    }
    console.log(resultado);
    return resultado;
}

sumAll(1,100);
if (sumAll(1, 100) === (100/2)*(100+1)) {
    console.log('funca');
}