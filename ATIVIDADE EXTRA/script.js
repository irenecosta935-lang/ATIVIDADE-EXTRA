"use strict";
class Cronometro {
    constructor() {
        this.segundos = 0;
    }
    avancar(valor) {
        if (valor > 0)
            this.segundos += valor;
    }
    zerar() {
        this.segundos = 0;
    }
    emMinutos() {
        return this.segundos / 60;
    }
}
let cronometro = new Cronometro();
cronometro.avancar(90);
console.log(cronometro.segundos);
cronometro.avancar(90);
cronometro.avancar(30);
console.log("Segundos:", cronometro.segundos);
console.log("Minutos:", cronometro.emMinutos());
cronometro.avancar(-20);
console.log("Após -20:", cronometro.segundos);
cronometro.zerar();
console.log("Após zerar:", cronometro.segundos);
console.log("Minutos após zerar:", cronometro.emMinutos());
let outroCronometro = new Cronometro();
outroCronometro.avancar(45);
console.log("Primeiro cronômetro:", cronometro.segundos);
console.log("Segundo cronômetro:", outroCronometro.segundos);
