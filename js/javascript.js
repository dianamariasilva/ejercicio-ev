var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}
var celdita=
celdita.style.background="#333";
function redirect(event){
    document.getElementById("mostrar2").innerHTML=(event.target.textContent);
}

function translate(){
	var nombre = document.getElementById("inputNombre");
	var password = document.getElementById("inputApellido");
	var button = document.getElementsByClassName("btn")[0];
}
translate();
function mostrarDatos(){
	var resultado= document.getElementById("inputNombre").value;
	var resultado= document.getElementById("inputApellido").value;
	document.getElementById("mostrar").innerHTML=resultado;
}

var productos = [];
function mergeHTML (){
  var html = '';
  for (i=0; i<productos.length; i++){
    html += productos[i].toHTML();
  }
  return html;
}

//función que imprime un producto luego de ingresarlo
function printHTML (html){
  records.innerHTML = '';
  records.innerHTML = html;
}
var printAll = document.getElementById('print');
printAll.onclick = function() {
  printHTML(mergeHTML());
}