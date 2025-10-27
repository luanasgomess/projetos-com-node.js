const express = require("express")

const router = express.Router()



const app = express()

const porta = 3333



function mostraMulher(request, response) {

 response.json({

    nome: 'Luana Gomes',

    imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQG8DWwWbcBkEA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729282248369?e=1762992000&v=beta&t=TDeWC7N87IfYfCEOHsSpw_FQ3SdvlgrPJoaLY62WMZA',

    minibio: 'Estudante de engenharia de software'

 })

}



function mostraPorta() {

    console.log("Servidor criado e rodando na porta ", porta)

}



app.use(router.get('/mulher', mostraMulher))

app.listen(porta, mostraPorta)