function calcularMonedas(cantidad){
    let arrayCambio = [];
    let cont = 0;
    while(cantidad>0)
    {
        cantidad = cantidad - 5;
        arrayCambio.push(5);
        cont++;
    }
    return arrayCambio;
}

export default calcularMonedas;