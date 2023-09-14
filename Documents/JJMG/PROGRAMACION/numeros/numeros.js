var numero;
var unDijito, dosDijitos, tresDijitos;

numero = parseInt(prompt("Ingrese un número"));

switch (true) {

    case numero > 0 && numero < 10:
        unDijito = numero * numero;
        alert("Su resultado es " + unDijito);
        break;


    case numero >= 10 && numero < 100:
        dosDijitos = numero*2;
        alert("Su resultado es " + dosDijitos);
        break;
 

    case numero >= 100 && numero < 1000:
        tresDijitos = numero -100;
        alert("Su respuesta es " + tresDijitos);
        break;
 

    default:
        alert("Número no válido");
        break;

}