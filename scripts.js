//Altura e largura do palco do jogo
let screenHeight = 0,
    screenWidth = 0

// Pontos de vida 
let vidas = 1

// Tempo de jogo
let tempo = 15

let criaMosquitoTempo = 1500

let selectionNivel = window.location.search
selectionNivel = selectionNivel.replace('?', '')

if (selectionNivel === 'normal') {
    criaMosquitoTempo = 1500
}
else if (selectionNivel === 'dificil') {
    criaMosquitoTempo = 1000
}
else if (selectionNivel === 'horaDoShow') {
    criaMosquitoTempo = 750
}

// Dados do tamanho da Screen
const adjustScreenGame = () => {
    screenHeight = innerHeight
    screenWidth = innerWidth

    console.log(screenWidth, screenHeight)
}
adjustScreenGame()

// Criação do Cronômetro
let cronometro = setInterval(() => {
    tempo -= 1

    if (tempo < 0) {
        // Eliminando funções da memória
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

const positionRandom = () => {

    // Removendo o mosquito anterior, caso exista
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        // document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

        // Start do Fluxo de game over
        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        }
        else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

            vidas++
        }
    }
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
    mosca.className = randomSize() + ladoAleatorio()
    mosca.style.position = 'absolute'
    mosca.style.left = positionWidth + 'px'
    mosca.style.top = positionHeight + 'px'
    mosca.id = 'mosquito'
    mosca.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosca)

    console.log(ladoAleatorio())
}

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

const ladoAleatorio = () => {
    let classe = Math.floor(Math.random() * 2)

    if (classe === 0) {
        return ' ladoA'
    }
    else {
        return ' ladoB'
    }
}


let nivel = window.location.search