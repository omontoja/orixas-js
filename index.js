var numeroRecebido = "11/06/1999";
var numeroPar = 0;
var numeroImpar = 0;
var lista = [];
var fronteDireita = 0;
var fronteEsquerda = 0;
var centro = 0;

function soNumeros() {
    numeroRecebido = numeroRecebido.replace(/[^0-9]/g, '');
    lista = numeroRecebido.split("")

}
soNumeros();
console.log(lista);
for (var i in lista) {
    lista[i] = parseInt(lista[i]);
}

function somaNuca() {
    for (var i in lista) {
        if (i % 2 === 0) {
            numeroPar += lista[i];
        }
    }
    if (numeroPar > 16) {
        numeroPar = numeroPar.toString().split("");
        numeroPar = parseInt(numeroPar[0]) + parseInt(numeroPar[1]);
    }
}

function somaTesta() {
    for (var i in lista) {
        if (i % 2 === 1) {
            numeroImpar += lista[i];
        }
    }
    if (numeroImpar > 16) {
        numeroImpar = numeroImpar.toString().split("");
        numeroImpar = parseInt(numeroImpar[0]) + parseInt(numeroImpar[1]);
    }
}

function somaFronteDireita() {
    fronteDireita = numeroPar + numeroImpar;

    if (fronteDireita > 16) {
        fronteDireita = fronteDireita.toString().split("");
        fronteDireita = parseInt(fronteDireita[0]) + parseInt(fronteDireita[1]);
    }
}

function somaFronteEsquerda() {
    fronteEsquerda = numeroImpar + numeroPar + fronteDireita;

    if (fronteEsquerda > 16) {
        fronteEsquerda = fronteEsquerda.toString().split("");
        fronteEsquerda = parseInt(fronteEsquerda[0]) + parseInt(fronteEsquerda[1]);
    }
}

function somaCentro() {
    for (var i in lista) {
        centro += lista[i];
    }

    if (centro > 16) {
        centro = centro.toString().split("");
        centro = parseInt(centro[0]) + parseInt(centro[1]);
    }
}

function calcularOrixas() {
    somaNuca();
    somaTesta();
    somaFronteDireita();
    somaFronteEsquerda();
    somaCentro();
}

calcularOrixas();

console.log("Nuca: " + numeroPar);
console.log("Testa: " + numeroImpar);
console.log("Fronte direita: " + fronteDireita);
console.log("Fronte esquerda: " + fronteEsquerda);
console.log("Centro: " + centro);