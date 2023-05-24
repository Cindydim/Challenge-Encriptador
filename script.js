const textArea = document.querySelector(".textarea"); //almacena lo que el usuario escribe en el textarea
const mensaje = document.querySelector("#mensaje");

const noData = document.getElementById("mensaje-no-data");
const ingresarTexto = document.getElementById("mensaje-ingresar-texto");
let botonCopiar = document.querySelector("#btn-copiar")


textArea.addEventListener("input", function() {
    const sanitizedText = removeAccents(textArea.value);
    textArea.value = sanitizedText;
});

mensaje.addEventListener("input", function() {
    const sanitizedText = removeAccents(mensaje.value);
    mensaje.value = sanitizedText;
});

function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


textArea.addEventListener("input", function() {
    const sanitizedText = removeSpecialCharacters(textArea.value);
    textArea.value = sanitizedText;
});

mensaje.addEventListener("input", function() {
    const sanitizedText = removeSpecialCharacters(mensaje.value);
    mensaje.value = sanitizedText;
});

function removeSpecialCharacters(text) {
    return text.replace(/[^\w\s]/gi, "");
}


function mostrarBoton(){
    botonCopiar.style.display = "flex"
}

function ocultarBoton(){
    botonCopiar.style.display = "none"
}



// Función para el botón encriptar

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    if (textoEncriptado === "") {
        mensaje.style.backgroundImage = "";
        noData.innerHTML = "No se ha ingresado ninguna palabra.";
        ingresarTexto.innerHTML = "Por favor, ingresa un texto para encriptar.";
        ocultarBoton();
        } else {
        noData.innerHTML = "";
        ingresarTexto.innerHTML = "";
        mostrarBoton();
        }
}

// Función para encriptar un texto

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}



// Función para el botón desencriptar

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}


// Función para desencriptar un texto

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

// Función para copiar el texto al portapapeles

function copiar() {
    let copiarMensaje = document.querySelector("#mensaje");
    let boton = document.getElementById("btn-copiar");
    navigator.clipboard.writeText(copiarMensaje.value);
    boton.textContent = "Copiado";
    setTimeout(function () {
    boton.textContent = "Copiar";
        }, 2000);
    }
