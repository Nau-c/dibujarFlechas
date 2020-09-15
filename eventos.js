//Muy parecido escribir en CCs, Jason (creamos un ob jeto literal)
// las variables son mayusculas porque son constantes no van a cambiar
var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

console.log(teclas);

//Escuchar lo que le pasara el usuario por teclado
//Probar keyup, se pueden usar para cosas similares pero tienen algún uso diferente investigar.
//keydown detecta cuando apretamos el botón, pero keyup detecta cuando el usuario suelta la tecla, en este caso no interesa saber cuando suelta la tecla
document.addEventListener("keydown", dibujarTeclado);
var canvas = document.getElementById("area_de_dibujo");
var papel = canvas.getContext("2d");
var x = 150;
var y = 150;
var color = black;

// Marcos de CANVAS 
dibujarLinea(color, 1, 1, 1, 299);
dibujarLinea(color, 1, 299, 299, 299,);
dibujarLinea(color, 299, 299, 299, 1);
dibujarLinea(color, 1, 299, 299, 299,);
dibujarLinea(color, 299, 1, 1, 1);
dibujarLinea(color, 1, 299, 1, 1,);







dibujarLinea("orange", x-1, y-1, x-1, y-1, papel);

function dibujarLinea(COLOR, Xinicial, Yinicial, Xfinal, Yfinal, LIENZO) 
{
  LIENZO.beginPath();
  LIENZO.strokeStyle = COLOR;
  LIENZO.lineWidth = 2;
  LIENZO.moveTo(Xinicial, Yinicial);
  LIENZO.lineTo(Xfinal, Yfinal);
  LIENZO.stroke();
  LIENZO.closePath();
}

// si le añadimos a la función dentro de los parentesís un parámetro, recogemos los datos de la misma
//function dibujarTeclado(evento) {
// if (evento.keyCode == teclas.UP) {
//  console.log("arriba");
// }

//Usarlo cuando realmente se pueda crear un código facilmente legible, depende de situación, switch a veces es confuso de leer
//el break para la instrucción y salta a la siguiente, entre case y break es lo que se dispara

//switch es comodo porque agrupa todas las opciones pero no sirve para comparar u mayor que o menor que. solo sirve para una cosa inicial o cosa final.
//default hace la función de else, si no es nada de lo anterior del bloque, pues es diferente.

function dibujarTeclado(evento) {
  var color = "green";
  var movimiento = 1;
  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(color, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      console.log("arriba");
      break;
    case teclas.DOWN:
      dibujarLinea(color, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      console.log("abajo");
      break;
    case teclas.LEFT:
        dibujarLinea(color, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      console.log("izquierda");
      break;
    case teclas.RIGHT:
        dibujarLinea(color, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      console.log("derecha");
      break;
    default:
      console.log("otra tecla");
      break;
  }
}

//usamos para probar y saber lo súmero de las teclas oprimidas
//  console.log("tecla oprimidad");  console.log(evento.keyCode);}
