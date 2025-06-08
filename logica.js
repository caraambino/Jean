const inputNumerador = document.getElementById("numerador");
const inputDenominador = document.getElementById("denominador");
const lbResultado = document.getElementById("res");
const lbResDiv = document.getElementById("resDiv");
const boton = document.getElementById("botonSimplificar");

boton.addEventListener('click', simplificar);

function simplificar(){
    let num = inputNumerador.value;
    let den = inputDenominador.value;

    for(let e = 0; e<15; e++){
        for(let i = 2; i<15; i++){
            if(num % i == 0 && den % i == 0){
                num = num / i;
                den = den / i;
            }
        }
    }
    
    lbResultado.innerText = "Simplificación: " +num + "/" + den;
    lbResDiv.innerText = "División: " + num/den;
}