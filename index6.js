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

function exibirAulas() {
    corpoDiv.innerHTML = ''

    titulos.map(titulo => {
        let tituloH2 = document.createElement("h2")
        // tituloH2.className = "titulo"
        tituloH2.textContent = titulo
    
        corpoDiv.appendChild(tituloH2)
    })
}

function adicionarAula() {
    let inputAula = document.querySelector("#inputAula")
    titulos.push(inputAula.value)
    inputAula.value = ''
    exibirAulas()
}