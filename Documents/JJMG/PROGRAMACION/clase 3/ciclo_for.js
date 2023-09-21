var edad, estadoCivil, estatura, sexo, numeroPersonas, porcentaje, acumularEdad, acumularEstatura, promedioEdad, promedioEstatura;

for(idpersonas=1;idpersonas<=10; idpersonas++){
    edad = parseInt(prompt("Ingrese la edad de la persona #" +idpersonas));
    estadoCivil = parseInt(prompt("Ingrese el estado civil de la persona #"+idpersonas+ ": 1. Soltero 2. casado"));
    estatura = parseInt(prompt("Ingrese la estatura de la persona #" +idpersonas));
    sexo = parseInt(prompt("Ingrese el sexo de la persona #" +idpersonas+ ": 1. Hombre 2.Mujer"));

    if ((edad>=18)&&(estadoCivil==1)&&(estatura>=170)&&(sexo==1)) {
        numeroPersonas=numeroPersonas+1;
        acumularEdad=acumularEdad+edad;
        acumularEstatura=acumularEstatura+estatura;
    }
}

porcentaje=(numeroPersonas/10)*100;
promedioEdad=acumularEdad/numeroPersonas;
promedioEstatura=acumularEstatura/numeroPersonas;

alert("la cantidad de las personas que cumplen las condiciones es " +porcentaje+ "%");
alert("el promedio de las personas que cumplen la condicion es " +promedioEdad);
alert("el promedio de las personas que cumplen la condiion es " +promedioEstatura);
