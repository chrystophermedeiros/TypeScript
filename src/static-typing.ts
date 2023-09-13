
// forma estatica

let age:number = 17
let fullname: string = "Chrystopher medeiros da Silva"
let isAlive: boolean = false

//inferenciua de tipos
let animal = "Dog"
let quantidade = 1

//parametros e retonos de funções

function soma (num1: number, num2: number) :number {
    const resultado = num1 + num2
    return resultado
}

console.log(soma(3,2));

//função com retorno opcional
function grreting(fullname:string):string | void {
    if(fullname) {
        return `Hello, ${fullname}`
    }
}

//funções com parametros opcionais
function stringnumbersize(value:string | number): number {
    if(typeof value === 'string') {
        return value.length
    }

    return value
}

console.log(stringnumbersize('chrystopher'));
console.log(stringnumbersize(6));



