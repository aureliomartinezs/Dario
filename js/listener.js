// Escucha de eventos

// Bloque de declaración e inicialización de variables
let $Aumentar = document.querySelector(".mas");
let $Disminuir = document.querySelector(".menos");

let numero = document.getElementById("num");
let contador = 0;

// Arrow functions
$Aumentar.addEventListener("click", ()=>{
    console.log("Hiciste clic en Aumentar");

    contador++;
    numero.textContent = contador;
});

$Disminuir.addEventListener("click", ()=>{
    console.log("Hiciste clic en Disminuir");

    contador--;
    numero.textContent = contador;
})


