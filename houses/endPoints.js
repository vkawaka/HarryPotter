'use strict'

export const getCharacterG = async() => {
    const url = 'https://api.potterdb.com/v1/characters'
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getSpells = async() => {
    const url = 'https://api.potterdb.com/v1/spells'
    const response = await fetch(url)
    const data = await response.json()

    return data
}