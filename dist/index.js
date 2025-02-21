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
;
const meuCarro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2025,
    motor: "2.0"
};
console.log("meuCarro:", meuCarro);
;
const multiplicar = (a, b) => {
    return a * b;
};
console.log("7 x 8 = ", multiplicar(7, 8));
console.log("5.20 x 14 = ", multiplicar(5.20, 14));
console.log("1719 x 12 = ", multiplicar(1719, 12));
// Exercício 3
function inverterArray(arr) {
    return arr.reverse();
}
const numeros = [1, 2, 3, 4, 5];
const numerosInvertidos = inverterArray(numeros);
console.log('Números invertidos: ', numerosInvertidos);
const strings = ['a', 'b', 'c', 'd'];
const stringsInvertidas = inverterArray(strings);
console.log('Letras invertidas: ', stringsInvertidas);
;
;
class RepositorioUsuario {
    constructor() {
        this.usuarios = [];
    }
    salvar(dado) {
        this.usuarios.push(dado);
    }
    ;
    retornar() {
        return this.usuarios;
    }
    ;
}
;
const repositorio = new RepositorioUsuario();
repositorio.salvar({ nome: 'Hete', email: 'hete@email.com' });
repositorio.salvar({ nome: 'Luci', email: 'luci@email.com' });
console.log(repositorio.retornar());
function processarResposta(resposta) {
    if (typeof resposta === 'string') {
        console.log("Processando resposta...");
        console.log("...");
        console.log({ resposta });
    }
    else if (typeof resposta === 'boolean') {
        if (resposta) {
            console.log('Resposta: Tudo certinho!');
        }
        else {
            console.log('Resposta: ERRO! Tente novamente.');
        }
    }
}
;
processarResposta('Tudo certo!');
processarResposta(true);
processarResposta(false);
;
;
const estudanteTrabalhador = {
    nome: 'Vanessa',
    curso: 'Análise e Desenvolvimento de Sistemas',
    empresa: 'X',
    cargo: 'Typescript Developer'
};
console.log(estudanteTrabalhador);
