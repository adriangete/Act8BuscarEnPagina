var palabra = document.getElementById("palabra");
var cajas = new Array();
var informacion;

cajas = document.querySelectorAll("div");

bBuscar.addEventListener("click", cogerDivs,false);

function cogerDivs(){
    //alert(palabra.value);
    for (var i=0;i<cajas.length;i++){
        informacion = cajas[i].innerHTML;
        //informacion.search(/palabra/i);
        informacion=informacion.replaceAll(palabra.value, "<b style='color:red'>"+palabra.value+"</b>");
        console.log(informacion);
        document.querySelector("#div"+(i+1)).innerHTML=informacion;
    }
}