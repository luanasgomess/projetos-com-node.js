const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Luana Gomes',
        imagem:'https://media.licdn.com/dms/image/v2/D4D03AQG8DWwWbcBkEA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729282248369?e=1762992000&v=beta&t=TDeWC7N87IfYfCEOHsSpw_FQ3SdvlgrPJoaLY62WMZA',
        minibio: 'Estudante de Engenharia de Software'
    
    },
    {
        nome: 'Katherine Johnson',
        imagem:'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQNPkQw0sFAUIVvKOd4L9r8XdIC2fZInERiF_SL6bX-xLOZmhSR4yRLRx63kRtxmT1RbF2ntsSnPMW1FwZZ0y6RcmhEtlY0-ZtK85V6KgT_mZk8kgCgB9L6zuF_xeWfo1bb9CEjcm1MHFA',
        minibio: 'Matemática'
    },
    {
         nome: 'Dorothy Vaughan',
        imagem:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS8g0kUY-He1LM2FXThDn5Fou4UAec9C7fEPiGhS2JoRb2d3rURmfNwn4YjUFSuwl0NF9OpGpv_vPfJm4YPKJ7jXt8eBsM8SPESrpfxEbpw',
        minibio: 'Matemática' 
    },
    {
         nome: 'Mary Jackson',
        imagem:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwXv2rauyccmHXu8WTKLCXIkWWsyQJ0C1wxNqtvI1IXuwsYgUIpNr-l95lMArWpxAcPidrLoH1y3-c8oOMPnrdb53eieYAAhgPIdwUQ54P3g',
        minibio: 'Matemática e Engenheira aeroespacial' 
    }

]

function mostraMulheres(request,response){
    response.json(mulheres)

}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)