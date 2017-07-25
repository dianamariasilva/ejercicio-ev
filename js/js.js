var arreglo=new Array(32);
var asientos = document.getElementsByTagName('td');
for (var i = 0; i < asientos.length; i++) {
    asientos[i].addEventListener('click',redirect,false);
}
var celdaActual;
function redirect(event){
    var asiento=(event.target.textContent);
    var mostrar=document.getElementById("mostrar");
    mostrar.innerHTML=asiento;

    celdaActual = event.target;

    var num = parseInt (mostrar.textContent);
    var obj = arreglo[num-1];
    if (obj !== undefined) {
        document.getElementById("name").value = obj.name;
         document.getElementById("lastname").value = obj.lastname;
        document.getElementById("dni").value = obj.dni;
    }
}

function reservar (){
    var mostrar=document.getElementById("mostrar");
    var numeroAsiento = parseInt (mostrar.textContent);
   if (numeroAsiento.length === 0)
      return;
    arreglo[numeroAsiento-1] = {
        name: document.getElementById("name").value,
        lastname: document.getElementById("lastname").value,
        dni: document.getElementById("dni").value,
    }
    console.log(arreglo);
     //var html = "";
    
    //html += s;

    celdaActual.style.backgroundColor = 'yellow';

    document.getElementById("name").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("dni").value = "";
   }


 function cancelar(){
   var num = parseInt (mostrar.textContent);
   var numeroAsiento = parseInt (mostrar.textContent);
   var obj = arreglo[num-1];
   if (obj !== undefined) {
         document.getElementById("name").value = "";
         document.getElementById("lastname").value = "";
         document.getElementById("dni").value = "";
         celdaActual.style.backgroundColor = 'transparent';
         arreglo=[];
    }
 }
 function listar(){
  var html = "";
  for (var i =0; i < arreglo.length; i++) {
    var dato_1 = arreglo[i];
    if (arreglo[i]!==undefined){
         
    //alert (dato_1);
    var s = "<div>" + 
    "<h1>" +  dato_1.name + "</h1>" + "<h2>" + dato_1.lastname +"</h2>" + "<h2>" + dato_1.dni +"</h2>"+
    "</div>";
    html += s;
  }
 }
   document.getElementById('mostrar2').innerHTML=html;
}

function buscar(){
  var html = "";
  var buscarDni = document.getElementById("dni").value;
  for(var i=1; i<arreglo.length; i++){
    var dato_1 = arreglo[i-1];
    if(arreglo[i-1]!= undefined && buscarDni == dato_1.dni){
  var s = "<div>" + 
    "<h1>" +  dato_1.name + "</h1>" + "<h2>" + dato_1.lastname +"</h2>" + "<h2>" + dato_1.dni +"</h2>"+
    "</div>";
    html += s;
    }
  }
    document.getElementById('mostrar3').innerHTML=html;
}

