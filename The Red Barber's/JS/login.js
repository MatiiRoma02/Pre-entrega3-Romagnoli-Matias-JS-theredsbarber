/* Login */
alert("Hola bienvenido a 'THE RED BARBER' Tu peluqueria de confianza 👋🏼😎")
alert("Por favor ingresa tu nombre y contraseña 🤙🏽")
alert("Por favor ingresa tu nombre es: 'prueba' 🤙🏽")
alert("Por favor ingresa tu contraseña es: '1234'🤙🏽")
function login() {
  var user, password;
  user = document.getElementById("usuario").value;
  password = document.getElementById("contrasena").value;

  if (user == "prueba" && password == "1234") {
    window.location = "../PAGES/inicio.html";
  } else {
    alert("Datos incorrectos");
  }
}
