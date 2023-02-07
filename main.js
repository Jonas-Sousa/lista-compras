let listaDeItens = []

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")
const ulItens = document.getElementById("lista-de-itens")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    salvarItem()
    exibirItens()
})

const salvarItem = () => {
    let comprasItem = itensInput.value
    let checarItemDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === comprasItem.toUpperCase())

    if(checarItemDuplicado){
        alert('Esse item ja existe')
    }else {
    listaDeItens.push({
        valor:comprasItem
    })
    }

    console.log(listaDeItens);
}

const exibirItens = () => {
    ulItens.innerHTML = ''

    listaDeItens.forEach((elemento, index) => {
        ulItens.innerHTML += `
            <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
                <div>
                    <input type="checkbox" class="is-clickable" />
                    <input type="text" class="is-size-5" value="${elemento.valor}"></input>
                </div>
                <div>
                    <i class="fa-solid fa-trash is-clickable deletar"></i>
                </div>
            </li>    
            
            `
    })
}