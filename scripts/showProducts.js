function showProducts (array) {
    let productsContainer = document.querySelector('.products')
    
    array.forEach(item => {
        productsContainer.insertAdjacentHTML('beforeend', `
        <div class="product">
            <img src=${item.img} alt=${item.nameItem}>
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

    return productsContainer
}

export default showProducts