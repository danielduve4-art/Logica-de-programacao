// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:
const aluno = {
    nome: "Lucas",
    idade: 15,
    curso: "Desenvolvimento de Sistemas"
    }
console.log(aluno.nome)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

// → Seu código aqui:
aluno.estado = {
    cidade: "Schroeder",
    rua: "Marechal Castelo Branco"
    }

    console.log(`Cidade:`, aluno.estado.cidade)
    


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:
aluno.habilidades = ["Dedicação", "Agilidade", "Concentração"]
 console.log(aluno.habilidades[0])

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:
aluno.notas = [8, 5, 10]
console.log(`Me chamo`, aluno.nome,`e minhas notas são:`, aluno.notas)


console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:
aluno.responsavel = {
    parentesco: "mae",
    nome: "Quedima"
}
console.log(aluno.responsavel.nome)
aluno.responsavel.nome = "Carla"
console.log(aluno.responsavel.nome)


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" e adicione o objeto "aluno".
// b) Crie outros dois objetos com dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.

// → Seu código aqui:
let listaDeAluno = [aluno]

 let aluno1 = {
     nome: "Leticia",
     idade: 14,
     curso: "Medicina"
 }
 let aluno2 = {
     nome: "Yasmin",
     idade: 17,
     curso: "Mecanica"
 }
 listaDeAluno.push(aluno1, aluno2)

 console.log(listaDeAluno[1].nome)

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:
let listaDeAlunos = [ {
    nome: "Dawidh",
    idade: 16,
    notas: [9, 6, 3]},

    {nome: "Gabriel",
    idade: 17,
    notas: [7, 9, 8]},

    {nome: "Guilherme",
    idade: 18,
    notas: [6, 8, 4]}




]
console.log(`Aluno:`, listaDeAlunos[0].nome,` Notas:`, listaDeAlunos[0].notas)
console.log(`Aluno:`, listaDeAlunos[1].nome,` Notas:`, listaDeAlunos[1].notas)
console.log(`Aluno:`, listaDeAlunos[2].nome,` Notas:`, listaDeAlunos[2].notas)





console.log("_______________________________");