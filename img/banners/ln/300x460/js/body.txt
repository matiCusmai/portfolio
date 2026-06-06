

// Para pintar fecha de actualización
const elementoFechaActualizacion = document.getElementById('fecha-actualizacion');

// ACÁ SE ACTIVA EL LINK SELECCTIONADO
var links = document.querySelectorAll('nav ul li a');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    for (var j = 0; j < links.length; j++) {
      links[j].classList.remove('active');
    }
    this.classList.add('active');
  });
}

// ACÁ COMIENZA EL CODIGO PARA CARGAR EL CONTENIDO DINAMICO
var container = document.getElementById("container");


async function obtenerDatos() {
  const respuesta = await fetch("https://lncampo.lanacion.com.ar/api/granos");
  const datos = await respuesta.json();
  return datos;
}
console.log(obtenerDatos);
async function datos() {
  const datosGuadados = await obtenerDatos();


  var row = ["cbot", "mtr", "pizarra"]
  // Acá están los datos obtenidos del fetch 

  for (var i = 0; i < row.length; i++) {
    switch (row[i]) {
      case "cbot":
        var tag = "CBOT"
        var data = datosGuadados.soja.cbot[0];
        break
      case "mtr":
        var tag = "MTR"
        var data = datosGuadados.soja.mtr[0];
        break
      case "pizarra":
        var tag = "PIZARRA"
        var data = datosGuadados.soja.pizarra[0];
        break
    }
    showData(tag, data);
  }
  var defaultActive = document.getElementById("soja")
  defaultActive.className = "active"


  var mostrarData = (id) => {
    container.innerHTML = ""

    console.log(datosGuadados);

    switch (id) {

      case "soja":
        console.log(id);
        for (var i = 0; i < row.length; i++) {
          switch (row[i]) {
            case "cbot":
              var tag = "CBOT"
              var data = datosGuadados.soja.cbot[0];
              break
            case "mtr":
              var tag = "MTR"
              var data = datosGuadados.soja.mtr[0];
              break
            case "pizarra":
              var tag = "PIZARRA"
              var data = datosGuadados.soja.pizarra[0];
              break
          }
          showData(tag, data);
        }
        break;

      case "trigo":
        console.log(id);
        for (var i = 0; i < row.length; i++) {
          switch (row[i]) {
            case "cbot":
              var tag = "CBOT"
              var data = datosGuadados.trigo.cbot[0];
              break
            case "mtr":
              var tag = "MTR"
              var data = datosGuadados.trigo.mtr[0];
              break
            case "pizarra":
              var tag = "PIZARRA"
              var data = datosGuadados.trigo.pizarra[0];
              break
          }
          showData(tag, data);
        }
        break;

      case "maiz":
        console.log(id);
        for (var i = 0; i < row.length; i++) {
          switch (row[i]) {
            case "cbot":
              var tag = "CBOT"
              var data = datosGuadados.maiz.cbot[0];
              break
            case "mtr":
              var tag = "MTR"
              var data = datosGuadados.maiz.mtr[0];
              break
            case "pizarra":
              var tag = "PIZARRA"
              var data = datosGuadados.maiz.pizarra[0];
              break
          }
          showData(tag, data);
        }
        break;

      case "sorgo":
        console.log(id);

        if (datosGuadados.sorgo && datosGuadados.sorgo.pizarra && datosGuadados.sorgo.pizarra.length > 0) {
          showData("PIZARRA", datosGuadados.sorgo.pizarra[0]);
        } else {
          console.log("No hay datos de Pizarra Rosario para Sorgo");
        }
        break;

      default:
        console.log("default");
    }
  };
  
// fecha de actualización
if (datosGuadados.actualizado) {
  elementoFechaActualizacion.textContent = "Actualizado: " + datosGuadados.actualizado;
} else {
  // caso en que la fecha no esté disponible
  elementoFechaActualizacion.textContent = "Fecha no disponible"; 
}

  window.mostrarData = mostrarData;

}

var showData = (tag, data) => {
  var icon;

  if (data) {
    switch (data.estatus) {
      case "up":
        icon = "up.png";
        break;
      case "down":
        icon = "down.png";
        break;
      case "equals":
        icon = "equals.png";
        break;
    }

    var name = (data.posicion) ? data.posicion : data.nombre;

    const rowContainer = document.createElement('div');

    rowContainer.innerHTML = `<div class="data-container">
    <div class="flex">
        <div class="flex column margin-left">
            <div class="data black">${tag}</div>
            <div id="maiz-cbot-posicion" class="data black">${name}</div>
        </div>
        <div class="flex">
            <div class="data">US$ <span id="maiz-cbot-precio">${data.precio}</span></div>
            <div class="data var"><span id="maiz-cbot-moneda">US$</span> <span id="maiz-cbot-var">${data.var}</span></div> 
            <div> <img class="arrow" src="${icon}" alt=""> </div>
        </div>
    </div>`;


    // Encuentra los elementos 'maiz-cbot-var' y 'maiz-cbot-moneda' 
    const elementoVariacion = rowContainer.querySelector('#maiz-cbot-var');
    const elementoMoneda = rowContainer.querySelector('#maiz-cbot-moneda');

    // Aplica el color según el valor de data.var
    if ((data.estatus) == "equals") {
      elementoVariacion.style.color = 'black';
      elementoMoneda.style.color = 'black';
    } else if ((data.estatus) == "up") { 
      elementoVariacion.style.color = '#008561';
      elementoMoneda.style.color = '#008561';
    } else { 
      elementoVariacion.style.color = 'red';
      elementoMoneda.style.color = 'red';
    } 


    container.appendChild(rowContainer);

  } else {
    container.innerHTML = `<div class="data-container">
        <div class="flex cont-datos">
            <div class="flex column margin-left">
                <div class="data black">MTR.</div>
                <div id="maiz-cbot-posicion" class="data black">---</div>
            </div>
            <div class="flex">
                <div class="data">US$ <span id="maiz-cbot-precio">--.--</span></div>
                <div class="data var">US$ <span id="maiz-cbot-var">--</span></div>
                <div> <img class="arrow" src="equals.png" alt=""> </div>
            </div>
        </div>`;
  }
};


datos();


