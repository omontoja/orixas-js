var numeroRecebido = "99/99/9999";
var numeroPar = 0;
var numeroImpar = 0;
var lista = [];


function soNumeros() {
    numeroRecebido = numeroRecebido.replace(/[^0-9]/g, '');
    lista = numeroRecebido.split("")

}
soNumeros();
console.log(lista);
for (var i in lista) {
    lista[i] = parseInt(lista[i]);
}

for (var i in lista) {
    if (i % 2 === 0) {
        numeroPar += lista[i];
    } else {
        numeroImpar += lista[i];
    }
}
if (numeroImpar > 16) {

    numeroImpar = numeroImpar.toString().split("");
    numeroImpar = parseInt(numeroImpar[0]) + parseInt(numeroImpar[1]);
    console.log("A soma dos numeros impares é " + numeroImpar);
}
if (numeroPar > 16) {
    numeroPar = numeroPar.toString().split("");
    numeroPar = parseInt(numeroPar[0]) + parseInt(numeroPar[1]);
    console.log("A soma dos numeros pares é " + numeroPar);
}