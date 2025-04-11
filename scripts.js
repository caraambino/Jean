const rango = document.getElementById("input");
const rango2 = document.getElementById("input2");
const rango3 = document.getElementById("input3");
 
const texto1 = document.getElementById("numeroText");
const texto2 = document.getElementById("numeroText2");
const texto3 = document.getElementById("numeroText3");

rango.addEventListener("input", funcion);
rango2.addEventListener("input", funcion);
rango3.addEventListener("input", funcion);

function funcion(){
    const body = document.getElementById("body");
    const value = document.getElementById("input").value;
    texto1.innerText = value;
    texto1.style.textShadow = `0 0 25px rgb(${value},0,0)`;
    const value2 = document.getElementById("input2").value;
    texto2.innerText = value2;
    texto2.style.textShadow = `0 0 25px rgb(0,${value},0)`;
    const value3 = document.getElementById("input3").value;
    texto3.innerText = value3;
    texto3.style.textShadow = `0 0 25px rgb(0,0,${value})`;

    body.style.background = `rgb(${value},${value2},${value3})`;
    document.getElementById("texto").innerText = `rgb(${value},${value2},${value3})`;
}


const botonCambiar = document.getElementById("botonCambiar");
botonCambiar.addEventListener("click", funcionCambiar);

const cita1 = "Citar reconoce el trabajo de otros investigadores y da contexto a tu propia contribución. Además, fortalece tus consultado fuentes confiables.";

const cita2 = "Debes citar siempre que utilices ideas, datos o cifras específicas provenientes de otras fuentes. No necesitas citar información que sea conocimiento común (por ejemplo, «hay siete días en una semana»).";

const cita3 = "Normalmente basta con citar una o dos fuentes relevantes por cada punto clave. Sin embargo, una lista más extensa de citas para presentar un panorama completo del tema.";

const cita4 = "Si no estás seguro de qué estilo utilizar en tu trabajo, consulta siempre con tu profesor o supervisor. Existen múltiples estilos de cita, y usar correctamen calificación.";

const cita5 = "El Manual de Publicación de la American Psychological Association (séptima edición, en el cual se basa esta guía) proporciona normas detalladas sobre  las fuentes.";

const todasLasCitas = [cita1, cita2, cita3, cita4, cita5];

function funcionCambiar(){
    const indice = Math.floor(Math.random() * 5);

    const parrafo = document.getElementById("parrafo");
    
    parrafo.innerText = todasLasCitas[indice];
}


const play = document.getElementById("play");
const stopp = document.getElementById("stop");

play.addEventListener("click", cronometro);

let segundosD = 0;
let segundosI = 0;
let minutosD = 0;
let minutosI = 0;
let horasD = 0;
let horasI = 0;
let tiempoSegundos = "";
let tiempoMinutos = "";

let encendido = false;

function cronometro(){

    if(encendido == false){
        encendido = true;
        const intervalo = setInterval(() => {
            stopp.addEventListener("click", ()=>{
                document.getElementById("contador").innerText = "00:00:00";
                segundosD = 0;
                segundosI = 0;
                minutosD = 0;
                minutosI = 0;
                horasD = 0;
                horasI = 0;
                clearInterval(intervalo);
                encendido = false;
            });

            segundosD++;

            if (segundosD >= 10){
                segundosI++;
                segundosD = 0;
            }

            tiempoSegundos = segundosI.toString() + segundosD.toString();

            if(tiempoSegundos == "60"){
                segundosD = 0;
                segundosI = 0;
                minutosD++;
            }

            if (minutosD >= 10){
                minutosI++;
                minutosD = 0;
            }

            tiempoMinutos = minutosI.toString() + minutosD.toString();

            if(tiempoMinutos == "60"){
                minutosD = 0;
                minutosI = 0;
                horasD++;
            }
            if (horasD >= 10){
                horasI++;
                horasD = 0;
            }
            

            document.getElementById("contador").innerText = `${horasI}${horasD}:${minutosI}${minutosD}:${segundosI}${segundosD}`;

        }, 1000);
    }
}
