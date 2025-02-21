let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

// Exercício 1
let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores: ", somaValores);

// Exercício 2
function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypesCript.`;
}
console.log(mensagemPersonalizada("Ana"));

// Exercício 3
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number)
{}
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}

const carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());

// Aula 20/02
// Exercício 1 
interface CarroDois { // mudei o nome para CarroDois porque o exercício anterior já estava como "Carro"
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
};

const meuCarro: CarroDois = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2025,
    motor: "2.0"
};

console.log("meuCarro:", meuCarro)

// Exercício 2
interface Multiplicacao {
    (a: number, b: number): number;
};

const multiplicar: Multiplicacao = (a, b) => {
    return a * b;
};

console.log("7 x 8 = ", multiplicar(7, 8));
console.log("5.20 x 14 = ", multiplicar(5.20, 14));
console.log("1719 x 12 = ", multiplicar(1719, 12));

// Exercício 3
function inverterArray<T>(arr: T[]): T[] {
    return arr.reverse(); 
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const numerosInvertidos = inverterArray(numeros);
  console.log('Números invertidos: ', numerosInvertidos); 
  
  const strings = ['a', 'b', 'c', 'd'];
  const stringsInvertidas = inverterArray(strings);
  console.log('Letras invertidas: ', stringsInvertidas); 

// Exercício 4
interface Repositorio<T> {
    salvar(dado: T): void;
    retornar(): T[];
  };
  interface Usuario {
    nome: string;
    email: string;
  };
  
  class RepositorioUsuario implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];
  
    salvar(dado: Usuario): void {
      this.usuarios.push(dado);
    };
    retornar(): Usuario[] {
      return this.usuarios;
    };
  };

  const repositorio = new RepositorioUsuario();
  repositorio.salvar({ nome: 'Hete', email: 'hete@email.com' });
  repositorio.salvar({ nome: 'Luci', email: 'luci@email.com' });

  console.log(repositorio.retornar());
  
// Exercício 5
type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === 'string') {
    console.log("Processando resposta...");
    console.log("...")
    console.log({resposta});
  } else if (typeof resposta === 'boolean') {
    if (resposta) {
      console.log('Resposta: Tudo certinho!');
    } else {
      console.log('Resposta: ERRO! Tente novamente.');
    }
  }
};

processarResposta('Tudo certo!');
processarResposta(true);
processarResposta(false);

// Exercício 6
interface Estudante {
    nome: string;
    curso: string;
  };
  interface Trabalhador {
    empresa: string;
    cargo: string;
  };
  
  type EstudanteTrabalhador = Estudante & Trabalhador;

  const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: 'Vanessa',
    curso: 'Análise e Desenvolvimento de Sistemas',
    empresa: 'X',
    cargo: 'Typescript Developer'
  };
  
  console.log(estudanteTrabalhador);