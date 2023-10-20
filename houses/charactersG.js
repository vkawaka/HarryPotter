'use strict'

let characters = []
const getCharacters = async () => {
    
    try{
        let url = 'https://hp-api.onrender.com/api/characters/house/gryffindor'
        const response = await fetch(url)
        characters = await response.json()
        createCharacterCard(characters)
    } catch (err) {
    }    

}

function criarBox(){

    const container = document.getElementById('container-character')


    characters.map((character) =>{
        const box = document.createElement('div')
        box.classList.add('box')

        const imgs = document.createElement('img')
        imgs.classList.add('characters')
        imgs.src = `../img/houses/${personagens[0].imagem}`

        const nome = document.createElement('p')
        nome.classList.add('name')
    })
    box.appendChild(imgs)
    box.appendChild(nome)

    return true
}

const personagens = [
    {
        imagem: 'hufflepuff.png',
        nome: 'hufflepuff'
    }
]


getCharacters()
// pegarImagens()
// pegarNome()