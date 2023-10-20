'use strict'

import {getCharacterG} from "./endPoints.js"


const getInfos = async () => {
   const nameImage = await getCharacterG()

   const arrayS = nameImage.data

   const container = document.getElementById('container')

   arrayS.forEach(function(item) { 
       if(item.attributes.house == 'Slytherin'){

        const div = document.createElement('div')
           div.classList.add('box-s')
        
           div.innerHTML = `
               <p id="name" class="name">${item.attributes.name}</p>
           `
           container.appendChild(div)
           console.log(div)
       }
   })
}
getInfos()