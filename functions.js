/* Declaración e inicialización de variables */

var btn_enc = document.querySelector(".btn-enc");
var btn_desenc = document.querySelector(".btn-desenc");
var btn_copiar = document.querySelector(".btn-copiar");
var btn_limpiar = document.querySelector(".btn-limpiar");
var cont_munieco = document.querySelector(".contenedor-munieco");
var h3 = document.querySelector(".contenedor-h3");
var resultado = document.querySelector(".text-result");
var textoarea = document.querySelector(".text-area");
var msj = document.querySelector(".msj-resultado");


/* Asignación de eventos a funciones */

btn_enc.onclick = encriptar;
btn_desenc.onclick = desencriptar;
btn_copiar.onclick = copiar;
btn_limpiar.onclick = limpiar;


/* Declaración de Funciones */

function encriptar() {
    if(textoarea.value == "")
        return;
    ocultarLeyenda();
    resultado.textContent = encriptarTexto(recuperarTexto());
    msj.textContent = "Mensaje encriptado";
}

function desencriptar() {
    if(textoarea.value == "")
        return;
    ocultarLeyenda();
    resultado.textContent = desencriptarTexto(recuperarTexto());
    msj.textContent = "Mensaje desencriptado";
}

function copiar() {
    textoarea.value = resultado.textContent;
    copyToClipBoard();
}

function limpiar() {
    textoarea.value = "";
    resultado.textContent = "";
    showLeyenda();
}

function recuperarTexto() {
    var textarea = document.querySelector(".text-area");
    return textarea.value;
}

function ocultarLeyenda() {
    cont_munieco.classList.add("hidden");
    h3.classList.add("hidden");
}

function showLeyenda() {
    cont_munieco.classList.remove("hidden");
    h3.classList.remove("hidden");
}

function encriptarTexto(mensaje) {
    var texto=mensaje;
    var textoFinal="";
    
    for(var i=0;i<texto.length;i++)
    {
        switch(texto[i])
        {
            case "a":
                textoFinal+="ai"
                break;
            case "e":
                textoFinal+="enter"
                break;
            case "i":
                textoFinal+="imes"
                break;
            case "o":
                textoFinal+="ober"
                break;
            case "u":
                textoFinal+="ufat"
                break;
            default:
                textoFinal+=texto[i];
                break;
            
        }
    }
    return (textoFinal);
}

function desencriptarTexto(mensaje) {
    var texto=mensaje;
    var textoFinal="";
    
    for(var i=0;i<texto.length;i++) {
        switch(texto[i]) {
            case "a":
                textoFinal+="a"    
                i++;
                break;
            case "e":
                textoFinal+="e"    
                i+=4;
                break;
            case "i":
                textoFinal+="i"
                i+=3;
                break;
            case "o":
                textoFinal+="o"    
                i+=3;
                break;
            case "u":
                textoFinal+="u"    
                i+=3;
                break;
            default:
                textoFinal+=texto[i];    
                break;
        }
    }
    return (textoFinal);
}

function copyToClipBoard() {
    var codigoACopiar = document.querySelector(".text-result"); 
    var seleccion = document.createRange();
    seleccion.selectNodeContents(codigoACopiar);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    document.execCommand('copy');
    window.getSelection().removeRange(seleccion);    
}