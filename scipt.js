// ddeclaração de uma constante
const perguntas = [
    {
      // pegunta nesse caso vai receber Qual é o resultado da expressão '2 + 2' em JavaScript?
        pergunta: "Qual é o resultado da expressão '2 + 2' em JavaScript?",
        // respostas vão receber essas 3 opçôes
        respostas: [
            "3",  // essa é a 0
            "4",  // essa é a 1
            "5"  // essa é a 2
        ],
        // aqui é declarado que a resposta certa é a 1
        correta: 1
    },
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        respostas: [
            "var",
            "let",
            "const"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "<!-- Este é um comentário -->",
            "/* Este é um comentário */"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "="
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função usada para exibir uma mensagem de alerta em JavaScript?",
        respostas: [
            "alert()",
            "msgBox()",
            "prompt()"
        ],
        correta: 0
    },
    {
        pergunta: "O que é um array em JavaScript?",
        respostas: [
            "Um tipo de loop.",
            "Um tipo de variável.",
            "Uma estrutura de dados que armazena uma coleção de elementos."
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "addElement()",
            "push()",
            "append()"
        ],
        correta: 1
    },
    {
        pergunta: "O que é uma função em JavaScript?",
        respostas: [
            "Um tipo de dado.",
            "Um tipo de operador.",
            "Um bloco de código reutilizável que pode ser chamado e executado."
        ],
        correta: 2
    },
    {
        pergunta: "Como você faz um comentário de várias linhas em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "<!-- Este é um comentário -->",
            "/* Este é um comentário */"
        ],
        correta: 2
    },
    {
        pergunta: "Qual é a forma correta de declarar uma função em JavaScript?",
        respostas: [
            "function: minhaFuncao() {}",
            "def minhaFuncao() {}",
            "function minhaFuncao() {}"
        ],
        correta: 2
    }
];

// aqui é declarado que quiz vai se igual a alguma tag dentro do HTML que tenha o ID de quiz
const quiz = document.querySelector('#quiz')

// template recebe a tag template
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// para uma tag que tenha o nome= 'item', declarar que quizItem é igual a o conteúdo do template 
for(const item of perguntas) {
const quizItem = template.content.cloneNode(true)

// vai pegar o quizItem dentro dele o h3, o conteúdo do h3 e declarar igualdade a pegunta que está dentro de item
quizItem.querySelector('h3').textContent = item.pergunta

// pegar as respostas é criar uma const que dt é igual a dt que está dentro de dl que está em quizItem
for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)

  // pegar o span que está dentro de dt, pegar o conteudo desse span que vai ser igual a resposta
  dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pegunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)

  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta

    corretas.delete(item)
    if(estaCorreta) {
        corretas.add(item)
    }
    
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  } 

// vai pegar o dl dentro de quizItem e adicionar o contúdo na tela
  quizItem.querySelector('dl').appendChild(dt)
}

// remover dt da tela
quizItem.querySelector('dl dt').remove()

// mostrar o conteúdo do quizItem na tela
quiz.appendChild(quizItem)

}