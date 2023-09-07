var baseCuadrado, alturaCuadrado, areaCuadrado, baseTriangulo, alturaTriangulo, areaTriangulo, radio, areaCirculo;
var pi=3.116;
var figurasGeomericas;

figurasGeomericas = parseFloat("selecione la figura geometrica a la que le desea encontrar el area: 1.cuadrado 2.triangulo 3.cierculo");

switch(figurasGeomericas) {
    case 1:
        alturaCuadrado = parseFloat(prompt("ingrese la altura del cuadrado"));
        baseCuadrado = parseFloat(prompt("ingrese la base del cuadrado"));
        areaCuadrado = alturaCuadrado*baseCuadrado;
        alert("el area del cuadrado es " + areaCuadrado)
        break;
    case 2:
        alturaTriangulo = parseFloat(prompt("ingrese la altura del triangulo"));
        baseTriangulo = parseFloat(prompt("ingrese la base del triangulo"));
        areaTriangulo = alturaTriangulo*baseTriangulo/2;
        alert("el area del triangulo es " + areaTriangulo)
        break;
    case 3:
        radio = parseFloat(prompt("ingrese el radio del circulo"));
        areaCirculo = pi*radio*radio;
        alert("el area del circulo es " + areaCirculo)
        break;

    default:
        alert("la opcion escogida es invalidad");
        break;

}
