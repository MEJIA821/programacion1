var numero;
var unDijito, dosDijitos, tresDijitos;

numero = parseInt(prompt("ingrese un numero"));

switch(numero) {
    case 1:
        unDijito = 0>numero<10;
        unDijito = numero*numero;
        alert("su resultado es " + unDijito);
        break;

    case 2:
        dosDijitos = 9>numero<100;
        dosDijitos = numero*2;
        alert("su resultado es " + dosDijitos);
        break;

    case 3:
        tresDijitos = 99>numero<1000;
        tresDijitos = numero-100;
        alert("su respuesta es " + tresDijitos);
        break;

    default:
        alert("numero no valido");
        break;
}