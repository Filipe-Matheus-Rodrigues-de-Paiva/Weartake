import { addToCart } from "./cart.js"

function filterMenu (array) {
    /* 1° passo: pegar os elementos HTML envolvidos */
    const buttons = document.querySelectorAll('.menu-button')
    const products = document.querySelector('.products')

    /* 2° passo: formatar evento no click */
    buttons.forEach((button) => { // Para 'cada' botão
        button.addEventListener('click', (e) => {
            /* 3º passo: esvaziar a div e itens descendentes */
            products.innerHTML = ''
            
            /* 4º passo: Filtrar os produtos */
            const filteredProducts = array.filter((item) => {
                return item.tag[0] === e.target.innerHTML
            })
            
            /* 5º passo: Se for clicar em todos faz append em todos os itens da database */
            if (e.target.innerHTML == "Todos") {
                array.forEach(item => {
                    products.insertAdjacentHTML('beforeend', `
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
            }

            /* 6º passo: Se for clicar em alguma tag, faz append apenas nos items filtrados */
            filteredProducts.forEach(item => {
                products.insertAdjacentHTML('beforeend', `
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

            addToCart(array)
        })
    })
}

export default filterMenu