//Altura e largura do palco do jogo
let screenHeight = 0,
    screenWidth = 0

const adjustScreenGame = () => {
    screenHeight = innerHeight
    screenWidth = innerWidth

    console.log(screenWidth, screenHeight)
}

adjustScreenGame()

const positionRandom = () => {
    // Gerando posição randômica
    let positionHeight = Math.floor(Math.random() * screenHeight) - 90
    let positionWidth = Math.floor(Math.random() * screenWidth) - 90

    // Resolvendo problema de dar posições abaixo de 0
    positionHeight = positionHeight < 0 ? 0 : positionHeight
    positionWidth = positionWidth < 0 ? 0 : positionWidth

    console.log(positionHeight, positionWidth)

    //criando elemento html
    let mosca = document.createElement('img')
    mosca.src = 'imagens/mosca.png'
    mosca.className = 'mosquito-random'
    mosca.style.position = 'absolute'
    mosca.style.left = positionWidth + 'px'
    mosca.style.top = positionHeight + 'px'


// Gerando tamanhos aleatórios para o mosquito
const randomSize = () => {
    let classe = Math.floor(Math.random() * 3)

    if (classe === 0) {
        return 'mosquito-size1'
    }
    else if (classe === 1) {
        return 'mosquito-size2'
    }
    else {
        return 'mosquito-size3'
    }
}