function multiplicacion(){
    var numero1 = document.getElementById('numero1').value;
    var numero2 = 3;
    var resultado = numero1 * numero2;

   

    if (resultado === 0 || resultado <= 0){
        document.getElementById('resultado').textContent = 'No ingresaste un valor o el valor no es valido';
        document.getElementById('mensaje').textContent = 'Ingresa un valor valido porfavor';
    } else {
        parImpar(resultado);
        document.getElementById('resultado').textContent = 'El resultado es: ' + resultado
        document.getElementById('mensaje').textContent = mensaje;
    }

    
    
}

function parImpar(resultado) {
    if(resultado % 2 == 0) {
        mensaje = " El numero ingresado tiene un resultado par";
    }
    else {
        mensaje = " El numero ingresado tiene un resultado impar";
    }
}




