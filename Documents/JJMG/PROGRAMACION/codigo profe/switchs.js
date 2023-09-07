var nombre
var estadoCivil
nombre = prompt("ingrese el nombre de la persona");
estadoCivil = prompt("ingrese el estado civil: 1.soltero 2.casado 3.viudo 4.union libre 5.separado");
switch (estadoCivil) {
    case 1:
        alert(nombre + "es soltero")
        break;
    case 2:
        alert(nombre + "es casado")
        break;
    case 3:
        alert(nombre + "es viudo")
        break;
    case 4:
        alert(nombre + "esta en union libre")
        break;
    case 5:
        alert(nombre + "esta separado")
        break;
    default:
        alert("estado civil no valido")
        break;
}

