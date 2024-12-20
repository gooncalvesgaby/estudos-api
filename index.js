// o método fetch me permite realizar requisições HTTP de
// forma ASSÍNCRONA em APIs. fetch() é uma função, e o primeiro
// parâmetro da minha função fetch é a URL que eu quero acessar

//o método catch eu uso para tratativa de erros

// eu defini uma função e também indiquei que ela é ASYNC, ou seja,
//ela pode lidar com operações que levam tempo para serem concluidas.
// usando a palavra-chave ASYNC eu consigo utilizar a palavra-chave
// AWAIT dentro da minha função. 

// const resposta = await fetch(...) aqui eu to realizando uma requisição
//https para buscar infos de uma URL e o resultado dessa requisição
//ta sendo guardado nessa minha constante 'resposta'.

//const dados = await resposta.json()
//o método .json() converte a resposta da API em um objeto js
//e esse objeto eu to guardando na minha constante 'dados'

async function obtendoDados() {
    try{
        const resposta = await fetch('https://viacep.com.br/ws/02017010/json/')
        const dados = await resposta.json()
        console.log(dados)
    } catch(error) {
        console.log('erro na requisição', error)

    } finally {
        console.log('requisição finalizada')
    }
    }

obtendoDados()

// selecionar elementos html pelo document
// getElementByTagName = eu pego todos os meus elementos pela TagName
// aqui eu to pegando meu h1 pelo TagName

const pegandoElemento = document.getElementsByTagName('h1')

// console.log(pegandoElemento)
// eu posso pegar meu elemento pela Class dele também, assim como posso
//pega pelo ID também, o JS me permite muitas possibilidades (...)

//se eu quiser por exemplo pegar o que foi digitado no meu input
//eu posso usar o emailInput.value

const emailInput = document.getElementsByName('email')

// console.log(emailInput)

//pega um elemento pelo ID é uma das praticas mais usadas pelos Devs
//o ID eu uso unicamente uma vez por elemento, eu nunca repito o mesmo nome de ID
//para mais de um elemento

// console.clear()

const primeiroParagrafo = document.querySelector('p.paragrafo')

// console.log(primeiroParagrafo)

//a propriedade .textContent me permite acessar ou alterar o texto de um elemento

// console.log("conteudo:", primeiroParagrafo.textContent)

// a propriedade innerHTML permite que eu manipule um elemento hmtml

primeiroParagrafo.innerHTML = "novo paragrafo definido"

// console.log("innerHTML", primeiroParagrafo.innerHTML)

//aqui na minha linha abaixo eu estou definindo um valor para 
//o meu emailInput, e o valor que eu defini é "gabrielle gonçalves"
emailInput[0].value = "gabrielle gonçalves"

// com a propriedade VALUE eu posso tanto pegar um valor digitado em um campo
// como posso também alterar o valor desse campo, que foi o que eu acabei de fazer(...)

//ADICIONANDO ELEMENTOS DENTRO DA MINHA PÁGINA 
//o método document.createElement() me permite criar um novo elemento html

const listaUl = document.querySelector("ul#lista")

const novaTagLi = document.createElement("li") //criando uma tag li vazia

novaTagLi.textContent = "uma nova li" // add um texto dentro da tag li

// console.log(novaTagLi)

//o método APPENDCHILD() adiciona um novo filho ao elemento pai

// listaUl.appendChild(novaTagLi)

// trabalhando com eventos em JS, eventos são acões que acontecem
//na pagina web e são detectados pelo navegador, resultando em alguma
//ação pro usuario entre outros (...)

const button = document.querySelector("button")

button.addEventListener('click', (event) => {
    alert('voce clicou no botao')
})



