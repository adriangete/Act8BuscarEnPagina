//crear los arrays de cada uno de los elementos de datos
var aIsbn = new Array();
var aTitulo = new Array();
var aAutor = new Array();
var aEditorial = new Array();
var aPagina = new Array();
var posicion=0;

bSiguiente.addEventListener("click", registroSiguiente, false); 
bAnterior.addEventListener("click", registroAnterior, false); 
bModificar.addEventListener("click", modificarRegistro, false); 
bBorrar.addEventListener("click", borrarRegistro, false);


cargarXml();

function cargarXml(){
//leemos los datos del fichero xml que es datos.js y lo transformamos en una coleccion de datos
var codigo=new DOMParser();
var myXml=codigo.parseFromString(datosFichero, "text/xml");

//asociamos tl id con el elemento
aIsbn= myXml.getElementsByTagName("isbn");
aTitulo= myXml.getElementsByTagName("titulo");
aAutor= myXml.getElementsByTagName("autor");
aEditorial= myXml.getElementsByTagName("editorial");
aPagina= myXml.getElementsByTagName("paginas");

//llamamos a la funcion de mostrar registros
mostrarRegistro();
}

//funcion para pasar al siguiente registro 
function registroSiguiente(){
    //le sumamos 1 a la posicion
    posicion++;
    //SI LLEGA AL 5 QUE EMPIECE DE NUEVO
    if (posicion>=aIsbn.length){
        posicion=0;
    }
    //llamamos a la funcion de mostrar registros
    mostrarRegistro();
}

//funcion para pasar al registro anterior
function registroAnterior(){
    //le restamos 1 a la posicion
    posicion--;
    //SI LLEGA AL 5 QUE EMPIECE DE NUEVO
    if (posicion<=aIsbn.length){
        posicion=0;
    }
    //llamamos a la funcion de mostrar registros
    mostrarRegistro();
}
//primero le das a modificar, cambias los datos, y le vuelves a dar a modificar 
function modificarRegistro(){
    aIsbn[posicion].firstChild.nodeValue=iISBN.value;
    aTitulo[posicion].firstChild.nodeValue= Titulo.value;
    aAutor[posicion].firstChild.nodeValue=Autor.value;
    aEditorial[posicion].firstChild.nodeValue=Editorial.value;
    aPagina[posicion].firstChild.nodeValue=Paginas.value;
}
//intento de borrar registros (no funciona)
function borrarRegistro(){
    aIsbn.splice(posicion,1);
    aTitulo.splice(posicion,1);
    aAutor.splice(posicion,1);
    aEditorial.splice(posicion,1);
    aPagina.splice(posicion,1);
    
    posicion=0;
    visualiza(posicion);

}

//funcion para que visualicemos el registro correspondiente a la funcion 
function mostrarRegistro(){
    document.getElementById("iISBN").value=aIsbn[posicion].firstChild.nodeValue;
    document.getElementById("Titulo").value=aTitulo[posicion].firstChild.nodeValue;
    document.getElementById("Autor").value=aAutor[posicion].firstChild.nodeValue;
    document.getElementById("Editorial").value=aEditorial[posicion].firstChild.nodeValue;
    document.getElementById("Paginas").value=aPagina[posicion].firstChild.nodeValue;
}

 