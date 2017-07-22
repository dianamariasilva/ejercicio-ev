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
    //(event.target).style.backgroundColor = ((event.target).style.backgroundColor=='rgb(248, 237, 80)') ? 'transparent' : '#F8ED50';
}
function buscar(ingreso){
  var ingreso=document.getElementById("dni").value;
  var operacion= ingreso*2;
  document.getElementById("dni").value=operacion;
}
// var celdas = document.getElementsByTagName('td');
//       for (var i = 0; i < celdas.length; i++) {
//         celdas[i].addEventListener('click',redirect,false);
//       }   var numeroAsiento;
// function redirect(event){
//     numeroAsiento=(event.target.textContent);
//   document.getElementById("mostrar2").innerHTML=(event.target.textContent);
//   }
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

    celdaActual.style.backgroundColor = '#F8ED50';

    document.getElementById("name").value = "";
         document.getElementById("lastname").value = ""
        document.getElementById("dni").value = "";

}

// function cancelar(){

// }
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
  //----------------------------------------------------
// var N = 10; // Número de asientos
//    var asientos = [];
//    for (var i = 0; i < N; i++) {
//       asientos[i] = undefined;
//    }
// function
//  mostrar(asientos){
//    var s1 = "", s2 = "";
//    for (var i = 0; i < asientos.length; i++) {
//       var e =  (asientos[i] != undefined)  ?  '*' : '';
//       if ( i % 2 == 0)
//          s1 += (i+1) + "[" + e + "] ";
//       else
//          s2 += (i+1) + "[" + e + "] ";
//    }
//    return "\n" + s1 + "\n" + s2 + "\n";
// }  
// console.log(mostrar(asientos));
// function reserva () {
//    var N = 10; // Número de asientos
//    var asientos = [];
//    for (var i = 0; i < N; i++) {
//       asientos[i] = undefined;
//    }
//    var mensaje = "0: Salir\n" +
//                  "1: Reservar  asiento\n" +
//                  "2: Liberar asiento \n" + 
//                  "3: Buscar \n";
   
//    var option = 0;
//    while (true){
//       var str = mostrar(asientos) + mensaje + " >> ingrese opcion:" ;
//       option = parseInt( prompt( str )  );
//       if (option == 0) {
//          break;
//       }else if (option == 1) {
//          str = "seleccione asiento: " + mostrar(asientos);
//          var nro = parseInt( prompt( str )  );
//          if (nro > 0 && nro <= N) {
//             var name =  prompt( "nombre del pasajero" )  ;
//             var id = parseInt( prompt( "dni del pasajero"  ) );
//             asientos[nro - 1] = {
//                nombre : name,
//                dni: id
//             };
//          }
//       }else if (option == 2) {
//          str = "seleccione asiento: " + mostrar(asientos);
//          var nro = parseInt( prompt( str )  );
//          if (nro >0 && nro <= N) {
//             asientos[nro - 1] = undefined;
//          }
//        }else if (option == 3) {
//          str = "Ingresar DNI: ";
//          var nro = parseInt( prompt( str )  );
//          for (var i= 0 ;  i < asientos.length ; i++){
//             if (asientos[i]!= undefined) {
//                if (asientos[i].dni==nro){
//                str = mostrar(asientos) +
//                      "Nombre del pasajero: " + asientos [i].nombre + 
//                      "DNI del pasajero: " + asientos [i].dni;
                
//              alert (str);
//                }
//             }
//          }
//       }
//    } 
   
// }

// reserva();
