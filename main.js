let listaDeItens = []

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    salvarItem()
})

const salvarItem = () => {
    let comprasItem = itensInput.value

    listaDeItens.push({
        valor:comprasItem
    })

    console.log(listaDeItens);
}
