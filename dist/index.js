"use strict";
let mensagem = "Olá, TypeScript!";
console.log(mensagem);
// Exercício 1
let valores = [10, 20, 30];
let somaValores = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores: ", somaValores);
// Exercício 2
function mensagemPersonalizada(nome) {
    return `Olá, ${nome}! Bem-vindo ao TypesCript.`;
}
console.log(mensagemPersonalizada("Ana"));
// Exercício 3
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    detalhes() {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());
