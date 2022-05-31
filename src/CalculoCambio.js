function calcular(costo,cantidad){
    let cambio;
    cambio = cantidad - costo;
    if(cambio<0)
    {
        console.log("Dinero insuficiente para la compra.");
    }
    return cambio;
}

export default calcular;