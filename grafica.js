// Para gráficas
paraGrafica();

function leerlT() {
  let camareros = JSON.parse(localStorage.getItem('camareros'));
  nombreCamarero = [];
  camareros.forEach((elem) => {
    nombreCamarero.push(elem.name);
  });

  let claveslt = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (nombreCamarero.includes(key)) {
      claveslt.push(key);
    }
  }

  return claveslt; // devuelve un array los camareros que hay en local storage
}

function vpaGrafica(camarero) {
  let cam1 = JSON.parse(localStorage.getItem(camarero));
  let valores = [];
  cam1.forEach((elem) => {
    let valor = Object.values(elem);
    valores.push(valor[0]);
  });
  return valores; // devuelve un array del dinero recogido por un camarero
}

function mpaGrafica(camarero) {
  let mesas = JSON.parse(localStorage.getItem(camarero));
  let claves = [];
  mesas.forEach((elem) => {
    let clave = Object.keys(elem);
    claves.push(clave[0]);
  });
  return claves; // devuelve las mesas atendidas por un camarero
}

function paraGrafica() {
  let recXcam = [];
  let mesXcam = [];

  const camenLS = leerlT(); // Se traen todos los camareros que hay en LS
  camenLS.forEach((elem) => {
    let obj = {};
    let obj2 = {};
    obj[elem] = Math.round(
      vpaGrafica(elem).reduce((sum, current) => sum + current, 0)
    );
    recXcam.push(obj);
    obj2[elem] = mpaGrafica(elem).length;
    mesXcam.push(obj2);
  });
  console.log(mesXcam);
  localStorage.setItem('recaudacion', JSON.stringify(recXcam));
  localStorage.setItem('totalmesa', JSON.stringify(mesXcam)); // return resultado;
}
// Las gráficas
let recaudado = JSON.parse(localStorage.getItem('recaudacion'));
let etiquetas = [];
recaudado.forEach((elem) => {
  etiquetas.push(Object.keys(elem)[0]);
});
let datos = [];
recaudado.forEach((elem) => {
  datos.push(Object.values(elem)[0]);
});

const labels = etiquetas;

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Recaudación diaria',
      backgroundColor: 'rgb(0, 96, 255)',
      borderColor: 'rgb(255, 99, 132)',
      data: datos,
    },
  ],
};

const config = {
  type: 'bar',
  data: data,
  options: {
    width: 300,
    height: 150,
  },
};

let myChart = new Chart(document.querySelector('#myChart'), config);
// la segunda gráfica
let mesashechas = JSON.parse(localStorage.getItem('totalmesa'));
let etimesas = [];
mesashechas.forEach((elem) => {
  etimesas.push(Object.keys(elem)[0]);
});
let datosmesa = [];
mesashechas.forEach((elem) => {
  datosmesa.push(Object.values(elem)[0]);
});
const labels1 = etimesas;

const data1 = {
  labels: labels1,
  datasets: [
    {
      label: 'Mesas',
      backgroundColor: 'rgb(0, 0, 255)',
      borderColor: 'rgb(255, 99, 132)',
      data: datosmesa,
    },
  ],
};

const config1 = {
  type: 'bar',
  data: data1,
  options: {
    width: 300,
    height: 150,
  },
};

let myChart1 = new Chart(document.querySelector('#myChart1'), config1);
