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

// -- Alterando estilos --

const input = document.querySelector("#name")

input.classList.add("input-error")
input.classList.remove("input-error")

// Se não tiver a classe adiciona. Se tem, remove.
input.classList.toggle("input-error")

const button = document.querySelector("button")

//Modificar as propriedades css do elemento
button.style.backgroundColor = "red"


// -- Criar elementos --

const guestsList = document.querySelector("ul")
const newGuest = document.createElement("li")
newGuest.classList.add("guest") // Add class na lista criada
const guestName = document.createElement("span") 

guestName.textContent = "Marcos"
newGuest.append(guestName) // Adiciona após o último filho
// newGuest.appendChild(guestName) // Opção mais simples

guestsList.append(newGuest)
console.log(newGuest)

// -- Manipulando Atributos --

const inputName = document.querySelector("input")

// Atualizar um atributo
// inputName.setAttribute("disabled", true)
// inputName.setAttribute("type", "file")

// Remover um atributo
// inputName.removeAttribute("id")

// -- Manipulando Eventos --

window.addEventListener("load",() =>{
    console.log("A página foi carregada!")
})

addEventListener("click", (event)=>{
    event.preventDefault()

    // Retorna todas as informações do evento
    // console.log(event)

    // Retorna o elemento clicado
    console.log(event.target)
    console.log(event.target.textContent)
})

// -- Eventos em um elemento específico --

const ul = document.querySelector("ul")

ul.addEventListener("scroll", () => {
    if (ul.scrollTop > 300){
        // console.log("FIM DA LISTA")
    }
    ul.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

const button2 = document.querySelector("button")
button2.addEventListener("click",(event) => {
    event.preventDefault()

    console.log("Clicou!")
})

// -- Eventos de input --

const input2 = document.querySelector("input")

// keydown - quando uma tecla é pressionada (captura tudo, incluindo CTRL, SHIFT, etc)
input2.addEventListener("keydown", (event) =>{
    console.log(event.key)
})

// keypress - quando uma tecla do tipo caractere é pressionada (letras, números, pontos, etc.)
input2.addEventListener("keypress", (event) =>{
    console.log(event.key)
})

// onChange - quando há mudança de foco
input2.onchange = () => {
    inputChange()
}

function inputChange() {
    console.log("O Input Mudou!")
}
