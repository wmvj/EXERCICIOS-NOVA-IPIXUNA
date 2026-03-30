// Visualizar o conteúdo do document
console.log(document)

// Obter o title da página
console.log(document.title)

// Acessar o elemento pelo ID (SELETOR ID)
const guest = document.getElementById("guest-2")
console.log(guest)

// Mostra as propriedades do objeto 
console.dir(guest)

// Acessar elemento com class (SELETOR Class)
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)

// Exibir o primeiro elemento da lista
console.log(guestsByClass.item(0))
console.log(guestsByClass[1])

// Selecionar uma lista de elementos pela tag
const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag)

// Acessa o elemento pelo selector ID
const guest2 = document.querySelector("#guest-2")
console.log(guest2)

// Retorna todos os elementos encontrados pelo query
const guests = document.querySelectorAll(".guest")
console.log(guests)

// Retorna o conteúdo como texto
const guest3 = document.querySelector("#guest-1 span")
console.log(guest3.textContent)
guest3.textContent = "Gilherme"

console.log(guest3.textContent) // Retorna o conteúdo visível e oculto
console.log(guest3.innerText) // Retorna somente o conteúdo visível
console.log(guest3.innerHTML) // Retorna o HTML como texto

// Alterando estilos
const input = document.querySelector("#name")

input.classList.add("input-error")
input.classList.remove("input-error")

// Se não tiver a classe adiciona. Se tem, remove.
input.classList.toggle("input-error")

const button = document.querySelector("button")

//Modificar as propriedades css do elemento
button.style.backgroundColor = "red"


