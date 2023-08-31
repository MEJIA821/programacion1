var salarioInicial;
var salarioAjustado;
var ajuste;
ajuste=parseFloat(ajuste);
salarioInicial=parseFloat(prompt(" ingrese su salario "));
if (salarioInicial<1300606) {
    ajuste=salarioInicial*0.15
} else {
    ajuste=0
}
salarioAjustado=salarioInicial+ajuste;
alert(salarioAjustado);
