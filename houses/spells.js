'use strict'

import {getSpells} from "./endPoints.js"


const getInfos = async () => {
   const nameImage = await getSpells()

   console.log(nameImage)
    const arrayS = nameImage.data

    const container = document.getElementById('container')

    arrayS.forEach(function(item) { 
         const div = document.createElement('div')
            div.classList.add('box')
        
           div.innerHTML = `
                <p id="name" class="name">${item.attributes.name}</p>
                <p id="name" class="cat">${item.attributes.category}</p>
            `
            container.appendChild(div)
            console.log(div)
    })
}
getInfos()