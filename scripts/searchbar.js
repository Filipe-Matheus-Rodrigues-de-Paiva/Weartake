import { addToCart } from "./cart.js"

function searchBar(array) {
    const input = document.querySelector('input')
    const searchButton = document.querySelector('.search-button')
    const products = document.querySelector('.products')

    searchButton.addEventListener("click", (e) => {
        e.preventDefault()
        products.innerHTML = ''

        const searchTerm = input.value.toLowerCase() // Converter a entrada para minúsculas

        const filteredProducts = array.filter((item) => {
            const itemName = item.nameItem.toLowerCase() // Converter o nome do item para minúsculas
            return itemName.includes(searchTerm)
        })

        if (filteredProducts.length === 0) {
            products.innerHTML = '<h1 style="color: blue; font-size: 20px; margin-top: 30px">Nenhum produto encontrado, tente novamente</h1>'
        }

        filteredProducts.forEach((item) => {
            products.insertAdjacentHTML('beforeend', `
                <div class="product">
                    <img src="${item.img}" alt="${item.nameItem}">
                    <div class="info">
                        <p class="tag">${item.tag[0]}</p>
                        <h2 class="title">${item.nameItem}</h2>
                        <p class="description">${item.description.slice(0, 55)}...</p>
                        <p class="price">R$ ${item.value}</p>
                        <button id=${item.id} class="add-to-cart">Adicionar ao carrinho</button>
                    </div>
                </div>
            `)
        })

        addToCart(array)
    })
}

export default searchBar