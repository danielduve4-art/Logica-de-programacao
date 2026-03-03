
// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:
const nome = "Lucas"
let idade = 15
let hobby = "jogar videogame"
const Apresentação = `Me chamo ${nome}, tenho ${idade} anos e meu hobby é ${hobby}.`

console.log(Apresentação)


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:
let cidade = "Schroeder"
let temperatura = 23
const frase = `Hoje em ${cidade}, cidade aonde eu moro está fazendo ${temperatura}°C, perfeito para estar jogando com meus amigos.`

console.log(frase)


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui
let escola = "miguel couto"
let serie_escolar = 2
let dirigindo = false
let trabalhar
let jogo_favorito = null
const frase1 = `Eu estudo na escola ${escola} em ${cidade}, (${typeof escola})`
const frase2 = `estou no ${serie_escolar}° ano do ensino medio. (${typeof serie_escolar})`
const frase3 = `Hoje fui para escola ${dirigindo} com meu carro, (${typeof  dirigindo})`
const frase4 = `depois da escola fui para a empresa ${trabalhar} (${typeof trabalhar})`
const frase5 = `e por fim depois que voltei do trabalho, liguei meu computador para jogar (${jogo_favorito}). ${typeof jogo_favorito}`

console.log(frase1,frase2,frase3,frase4,frase5)





console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
let personagem = "Lukinhas"
let idade_personagem = 21
let local_cidade = "Vale dos dragãoes"
let missão = "matar os dragãoes"
const frase_historia = `Era uma vez um rapaz chamado ${personagem} que vivia no ${local_cidade} com seus pais.
Quando completou seus ${idade_personagem} anos, ele recebeu uma missão que faria ele se tornar
o maior guerreiro de sua vila e para isso teria que ${missão} de sua região.`

console.log(frase_historia)


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:
const name = "Lucas"
let objetivo = "foco nos estudos"
const frase_motivacional = `${name}, mantenha o ${objetivo} hoje, porque assim você ira construir um futuro melhor.`

console.log(frase_motivacional)


console.log("_______________________________");

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:
console.log(`=======================================
          SISTEMA DO USUÁRIO
=======================================
1 - Ver Perfil
2 - Editar Perfil
3 - Configurações
4 - Notificações
5 - Relatórios
6 - Ajuda
7 - Sobre o Sistema
0 - Sair
=======================================
Digite o número da opção desejada
=======================================`)

console.log("_______________________________");
