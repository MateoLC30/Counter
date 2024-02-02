let contador = 0;

const result = document.querySelector("#result");
const suma = document.querySelector("#sumar");
const resta = document.querySelector("#restar");

suma.addEventListener("click", contadorSuma);
resta.addEventListener("click", contadorResta);

function contadorSuma(e){
    contador = contador + 1;
    result.innerHTML = contador;
}

function contadorResta(e){
    contador = contador - 1;
    result.innerHTML = contador;
}


