var arreglo=[];
function reservar (){
  var celdas = document.getElementsByTagName('td');
      for (var i = 0; i < celdas.length; i++) {
        celdas[i].addEventListener('click',redirect,false);
      }
    // var celdita=
    // celdita.style.background="black";
  function redirect(event){
  document.getElementById("mostrar2").innerHTML=(event.target.textContent);
  }
    var objeto= {};
    var current= celdas;
    objeto[current] = {
        name: document.getElementById("name").value,
        lastname: document.getElementById("lastname").value,
        dni: document.getElementById("dni").value,
    }
     var html = "";
    for (var k in objeto){
    var dato_1 = objeto[k];
    //alert (dato_1);
    var s = "<div>" + 
    "<h1>" +  dato_1.name + "</h1>" + "<h2>" + dato_1.lastname +"</h2>" + "<h2>" + dato_1.dni +"</h2>"+
    "</div>";
    html += s;
  }
  console.log( html );
}



// //función que imprime un producto luego de ingresarlo
// function printHTML (html){
//   records.innerHTML = '';
//   records.innerHTML = html;
// }

//   var celdas = document.getElementsByTagName('td');
//       for (var i = 0; i < celdas.length; i++) {
//         celdas[i].addEventListener('click',redirect,false);
//       }
//     // var celdita=
//     // celdita.style.background="black";
//   function redirect(event){
//   document.getElementById("mostrar2").innerHTML=(event.target.textContent);
//   }
// // Cuando hacen click en el boton de nueva compra, crea una nueva compra y la añade al array de productos
// var addCompra = redirect(event);
// addCompra.onclick = function() {
//   var compra = prompt('Ingrese su nueva Fruta');
//  // var cantidad = prompt('Ingrese la cantidad');
//   var product  = new Producto (compra );//,cantidad

//   objeto.push(product);
//   printHTML(product.toHTML());
// };


// // al hacerle click a mostrar todas las compras, imprime todas las compras en el html. ESTA ESTÁ BUENA, NO CAMBIAR NADA
// var printAll = document.getElementById('print');
// printAll.onclick = function() {
//   printHTML(mergeHTML());
// }
//   //     var array = [];
//   //     ârray [i]= objeto;
//   // }

//   // if (objeto[current]!=undefined){
//   //     current;
//   // }

