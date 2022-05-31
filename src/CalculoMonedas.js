function calcularMonedas(cantidad){
    let arrayC = [];
    while(cantidad>0)
    {
        if(cantidad>5)
        {
            cantidad = cantidad - 5;
            arrayC.push(5);
        }
        else
        {
            if(cantidad>2)
            {
                cantidad = cantidad - 2;
                arrayC.push(2);
            }
            else
            {
                cantidad = cantidad - 1;
                arrayC.push(1);
            }
        }
    }
    return arrayC;
}

export default calcularMonedas;