class Cronometro{
    segundos: number;
    constructor() {
        this.segundos = 0;
 }
    avancar(valor: number): void{
        if(valor > 0)
            this.segundos += valor
    }
    zerar(): void{
        this.segundos = 0;
    }
    emMinutos(): Number{
        return this.segundos / 60

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

class Estacionamento {
    placa: string;
    horas: number;

    constructor(placa: string) {
        this.placa = placa;
        this.horas = 0;
    }

    registrarPermanencia(horas: number): void {
        if (horas >= 0) {
            this.horas = horas;
        }
    }

    calcularHorasCobradas(): number {
        return Math.ceil(this.horas);
    }
   
    calcularValor(): number {
        return 0
    }
    emitirTicket(): string {
        let horasCobradas = this.calcularHorasCobradas();
        let valor = this.calcularValor();

    return `Placa: ${this.placa}, Horas cobradas: ${horasCobradas}, Valor: R$ ${valor.toFixed(2)}`;
}
    }
let estacionamento = new Estacionamento("ABC-1234");

estacionamento.registrarPermanencia(0);
console.log(estacionamento.emitirTicket()); 

estacionamento.registrarPermanencia(1);
console.log(estacionamento.emitirTicket()); 

estacionamento.registrarPermanencia(1.2);
console.log(estacionamento.emitirTicket()); 

estacionamento.registrarPermanencia(3.5);
console.log(estacionamento.emitirTicket()); 

estacionamento.registrarPermanencia(-2);
console.log(estacionamento.emitirTicket()); 

 class Impressora{
    paginas: number;
    colorida: boolean;
    totalPaginasImpressas: number;
    valorTotalImpresso: number;

    constructor(){
        this.paginas = 0;
        this.colorida = false;
        this.totalPaginasImpressas = 0;
        this.valorTotalImpresso = 0;
    }
    
    inicializarPedido(paginas: number, colorida: boolean):void{
        this.paginas = paginas;
        this.colorida = colorida;

}
    calcularValor(): number{
         if (this.colorida) {
        return this.paginas * 0.80;
    } else {
        return this.paginas * 0.25;
    }
   }
    imprimir(): void {
        this.totalPaginasImpressas += this.paginas;
        this.valorTotalImpresso += this.calcularValor();
    }
    }

let impressora = new Impressora();

impressora.inicializarPedido(10, false);
impressora.imprimir();

impressora.inicializarPedido(10, true);
impressora.imprimir();

console.log("Total de páginas:", impressora.totalPaginasImpressas);
console.log("Valor total:", impressora.valorTotalImpresso);

impressora.inicializarPedido(10, true);
console.log("Valor do pedido:", impressora.calcularValor());
console.log("Total de páginas após calcular:", impressora.totalPaginasImpressas);

class ColecaoNumeros {
    numeros: number[];
    constructor(){
        this.numeros = [];
    }
    adicionar(numero: number): void{
        this.numeros.push(numero);
    }
    limpar(): void {
           this.numeros = [];
    }
    quantidade(): number {
         return this.numeros.length;
    }
    somar(): number {
          return this.numeros.reduce((total, numero) => total + numero, 0);
    }
    calcularMedia(): number{
         if (this.quantidade() === 0) {
        return 0;
    }

    return this.somar() / this.quantidade();
}
maior(): number | undefined {
    if (this.numeros.length === 0) {
        return undefined;
    }

    return Math.max(...this.numeros);
    }
menor(): number | undefined {
    if (this.numeros.length === 0) {
        return undefined;
    }

    return Math.min(...this.numeros);
}
}
let colecao = new ColecaoNumeros();
colecao.adicionar(10);
colecao.adicionar(20);
colecao.adicionar(30);

console.log(colecao.quantidade()); 
console.log(colecao.somar()); 
console.log(colecao.calcularMedia()); 
console.log(colecao.maior()); 
console.log(colecao.menor()); 

class RegistroTemperaturas{
    temperaturas: number[];
    limiteAlerta: number;
    constructor(){
        this.temperaturas = [];
        this.limiteAlerta = 30;
    }
    adicionar(temperatura: number): void{
         this.temperaturas.push(temperatura);
    }
    listar():string{
         let resultado = "";

        this.temperaturas.forEach((temperatura) => {
        resultado += temperatura + "\n";
    });

        return resultado;

    }
    acimaDoLimite(): number[]{
        return this.temperaturas.filter((temperatura => {
        return temperatura > this.limiteAlerta;
    }))
    }
    converterParaFahrenheit(): number[]{
         return this.temperaturas.map((temperatura) => {
        return temperatura * 9 / 5 + 32;
    });
    }
    calcularMedia(): number{
         if (this.temperaturas.length === 0) {
        return 0;
    }
}
}

let registro = new RegistroTemperaturas();

registro.adicionar(28);
registro.adicionar(31);
registro.adicionar(29);
registro.adicionar(35);
registro.adicionar(32);
registro.adicionar(27);
registro.adicionar(30);
