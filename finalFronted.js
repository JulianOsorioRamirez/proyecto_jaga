class empleado {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}
class nuevoEmpleado {
  constructor(newName, newPassword) {
    this.nuevoNombre = document.getElementById('newName').value;
    this.nuevoContraseña = document.getElementById('newPassword').value;
  }
}
class administrador {
  constructor(newAdmin, adminPass) {
    this.newAdmin = newAdmin;
    this.adminPass = adminPass;
  }
}

nuevoUsuario = document.getElementById('newName').value;
nuevoContraseña = document.getElementById('newPassword').value;

camareroUno = new empleado('camarero1', '1234');
camareroDos = new empleado('camarero2', '2345');
camareroTres = new empleado('camarero3', '3456');
camareroCuatro = new empleado('camarero4', '4567');
camareroCinco = new empleado('camarero5', '5678');
camareroSeis = new empleado('camarero6', '6789');
camareroSiete = new empleado('camarero7', '7890');
camareroOcho = new nuevoEmpleado(nuevoUsuario, nuevoContraseña);
camareroNueve = new nuevoEmpleado(nuevoUsuario, nuevoContraseña);
camareroDiez = new nuevoEmpleado(nuevoUsuario, nuevoContraseña);
admin = new administrador('admin1', '1234');

var camareros = [];
camareros.push(camareroUno);
camareros.push(camareroDos);
camareros.push(camareroTres);
camareros.push(camareroCuatro);
camareros.push(camareroCinco);
camareros.push(camareroSeis);
camareros.push(camareroSiete);
localStorage.setItem('camareros', JSON.stringify(camareros));

function registrar() {

  nuevoUsuario = document.getElementById('newName').value;
  nuevoContraseña = document.getElementById('newPassword').value;
  camareroOcho = new nuevoEmpleado(nuevoUsuario, nuevoContraseña);
  camareroNueve = new nuevoEmpleado(nuevoUsuario, nuevoContraseña);
  camareroDiez = new nuevoEmpleado(nuevoUsuario, nuevoContraseña);

  textRegistrationUser = document.getElementById('pNewUser').innerText =
    'Usuario Registrado';
  textRegistrationPass = document.getElementById('pNewPass').innerText =
    'Contraseña Registrada';

  setTimeout(function () {
    RegisUser = document.getElementById('pNewUser').innerText = '';
    RegisPass = document.getElementById('pNewPass').innerText = '';
  }, 2000);
  setTimeout(function () {
    window.location.href = 'otraPagina.html';
    var newUserSesion = sessionStorage.setItem(
      nuevoUsuario,
      JSON.stringify(camareroOcho)
    );
  }, 3000);

}

function validar() {
  nombreValido = document.getElementById('nombre').value;
  contraseñaValida = document.getElementById('contraseña').value;

  if (
    (camareroUno.name === nombreValido &&
      camareroUno.password === contraseñaValida) ||
    (camareroDos.name === nombreValido &&
      camareroDos.password === contraseñaValida) ||
    (camareroTres.name === nombreValido &&
      camareroTres.password === contraseñaValida) ||
    (camareroCuatro.name === nombreValido &&
      camareroCuatro.password === contraseñaValida) ||
    (camareroCinco.name === nombreValido &&
      camareroCinco.password === contraseñaValida) ||
    (camareroSeis.name === nombreValido &&
      camareroSeis.password === contraseñaValida) ||
    (camareroSiete.name === nombreValido &&
      camareroSiete.password === contraseñaValida) ||
    (camareroSiete.name === nombreValido &&
      camareroSiete.password === contraseñaValida) ||
    (camareroOcho.name === nombreValido &&
      camareroOcho.password === contraseñaValida) ||
    (camareroNueve.name === nombreValido &&
      camareroNueve.password === contraseñaValida) ||
    (camareroDiez.name === nombreValido &&
      camareroDiez.password === contraseñaValida)
  ) {
    window.location.href = 'otraPagina.html';

    for (i = 0; i < camareros.length; i++) {
      if (camareros[i].name == nombreValido) {
        sessionStorage.setItem(camareros[i].name, JSON.stringify(camareros[i]));
        sessionStorage.setItem('camareroActivo', JSON.stringify(nombreValido));
        sessionStorage.setItem('cajaDia', JSON.stringify([]));
      }
    }
  } else if (
    admin.newAdmin === nombreValido &&
    admin.adminPass === contraseñaValida
  ) {
    sessionStorage.setItem('administrador', JSON.stringify(admin));

    window.location.href = 'grafica.html';
  } else {
    parrafo = document.getElementById('pUser').innerText = 'Usuario no valido';
    parrafo2 = document.getElementById('pPass').innerText =
      'contraseña incorrecta';
    setTimeout(function () {
      parrafo = document.getElementById('pUser').innerText = '';
      parrafo2 = document.getElementById('pPass').innerText = '';
    }, 2000);
  }
}
