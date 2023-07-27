import dataUsers from "../models/userModel.js";

const cards = document.querySelector('#cards')

export function mostrarUsuarios(){
    dataUsers.map((dataUser)=>{
        const nombre = document.createElement('h1')
        const profesion = document.createElement('h3')
        const edad = document.createElement('h3')
        const card = document.createElement('section')
        nombre.textContent = dataUser.nombre
        profesion.textContent = dataUser.profesion
        edad.textContent = dataUser.edad
        card.append(nombre, profesion, edad)
        card.classList.add('card')
        cards.appendChild(card)       
    })
}