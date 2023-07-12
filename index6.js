let corpoDiv = document.querySelector("#corpo")

// let titulo = document.createElement("h1")
// titulo.className = "titulo"
// titulo.textContent = "Aula de DOM"

// corpoDiv.appendChild(titulo)

// let img = document.createElement("img")
// img.src = "tera.png"

// corpoDiv.appendChild(img)

let titulos = [
    "Aula de CSS",
    "Aula de Introdução ao Desenvolvimento WEB",
    "Aula de JavaScript",
    "Aula de Consumo de API"
]
// exibirAulas()
function exibirAulas() {
    corpoDiv.innerHTML = ''

    titulos.map((titulo, index) => {
        let tituloH2 = document.createElement("h2")
        // tituloH2.className = "titulo"
        tituloH2.textContent = titulo
    
        corpoDiv.appendChild(tituloH2)

        let deleteButton = document.createElement("button") 
        deleteButton.textContent = "Deletar Aula"
        deleteButton.onclick = () => {
            chamarAlerta(index)
        }

        corpoDiv.appendChild(deleteButton)

        let editarButton = document.createElement("button") 
        editarButton.textContent = "Editar Aula"
        editarButton.onclick = chamarAlerta

        corpoDiv.appendChild(editarButton)

        let hr = document.createElement("hr")
        corpoDiv.appendChild(hr)
    })
}

function adicionarAula() {
    let inputAula = document.querySelector("#inputAula")
    titulos.push(inputAula.value)
    inputAula.value = ''
    exibirAulas()
}

function chamarAlerta(index) {
    alert(index)
}