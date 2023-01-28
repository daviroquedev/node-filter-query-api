//importando o express

const express = require('express')

// criando uma instancia 
const app = express()

// configurando uma rota para a raiz do site
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/banner', (req, res) => {
    const banner = [{
            header: "melhores ofertas",
            titulo: "queima de estoque",
            subtitulo: "alo alo alo",
            imagem: ""
        },
        {
            header: "melhores ofertas2",
            titulo: "queima de estoque2",
            subtitulo: "alo alo alo2",
            imagem: "2"
        }
    ]
    res.send(banner)
})

app.get('/busca', (req, res) => {
    const termo = req.query.q
    console.log(termo)
    const produtos = [{
            categoria: "tenis",
            titulo: "calçado",
            descricao: "nopé",
            preco: "120,00",
            desconto: "50,00",
            image: ""
        },
        {
            categoria: "tenis",
            titulo: "calçado",
            descricao: "namao",
            preco: "120,00",
            desconto: "50,00",
            image: ""
        }
    ]
    // MODO 1 FOR EACH 
    // let procura = []
    // produtos.forEach(element => {

    //     if ((element.descricao).includes(termo)) {
    //         procura.push(element)
    //     }
    // })

    //MODO 2 FILTER
    const procura = produtos.filter((produto) => (produto.descricao).includes(termo))


    res.send(procura)

})


// Iniciando o servidor na porta 3000
app.listen(3000, () => {
    console.log('Server started on port 3000');
});