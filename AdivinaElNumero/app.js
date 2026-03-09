var resCorrecta = 0;
var numVidas = 3;

let numeroMaquina = Math.floor(Math.random() * 10) + 1;

while(resCorrecta == 0 && numVidas != 0){ 
   
    var numUsuario = parseInt(prompt("Tienes que adivinar un numero entre el 1 y el 10. Tienes 3 intentos.\nDame el numero en el que estas pensando"));
   
    console.log("Numero secreto de la maquina: " + numeroMaquina);
    console.log("El usuario eligio: " + numUsuario);
    console.log("Vidas actuales: " + numVidas);

    if(numUsuario == numeroMaquina){
        resCorrecta++;
        console.log("Acertaste");
    } 
    else if(numVidas != 1) {
        numVidas--;
        console.log("Fallaste, intentalo de nuevo");
        console.log("Te quedan: " + numVidas + " vidas");
    }
    else{
        console.log("Perdiste");
        numVidas--;
        console.log("Te quedaste sin vidas");
    }
}