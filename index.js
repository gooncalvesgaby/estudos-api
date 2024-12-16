// o método fetch me permite realizar requisições HTTP de
// forma ASSÍNCRONA em APIs. fetch() é uma função, e o primeiro
// parâmetro da minha função fetch é a URL que eu quero acessar

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