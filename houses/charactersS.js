'use strict'

import {getCharacterG} from "./endPoints.js"


const getInfos = async () => {
   const nameImage = await getCharacterG()

   const arrayS = nameImage.data

   console.log(arrayS)
   const container = document.getElementById('container')

   arrayS.forEach(function(item) { 
       if(item.attributes.house == 'Slytherin'){

        const div = document.createElement('div')
           div.classList.add('box-s')
        
           div.innerHTML = `
               <img src="${item.attributes.image}" alt="" class="photo">
               <p id="name" class="name">${item.attributes.name}</p>
           `
           container.appendChild(div)
           console.log(div)
       }
   })
}
getInfos()