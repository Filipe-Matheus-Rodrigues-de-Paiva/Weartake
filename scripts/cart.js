function addToCart(array) {
    /* Elementos da árvore DOM envolvidos */
    const buttons = document.querySelectorAll('.add-to-cart')
    const items = document.querySelector('.hidden-items')
    const cartMessage = document.querySelector('.cart-inside--message')
    const summary = document.querySelector('.hidden-summary')
    const quantityItems = document.querySelector('.quantity > span')
    const total = document.querySelector('.total > span')
  
    let cartItems = [] /* Array para armazenar os items do carrinho */
  
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        /* Mudanças de classes quando houver clique do botão */
        summary.classList.remove('hidden-summary')
        summary.classList.add('summary')
  
        cartMessage.classList.remove('cart-inside--message')
        cartMessage.classList.add('hidden-message')
  
        items.classList.remove('hidden-items')
        items.classList.add('items')

        /* Item a adicionar ao carrinho - comparação id no database com o id do botão */  
        const filteredProduct = array.find((item) => item.id === Number(e.target.id))

        /* Adição ao carrinho */
        cartItems.push(filteredProduct)

        /* Renderiza no carrinho */
        renderCart()
  
        // Função para renderizar o carrinho
        function renderCart() {
            /* esvazia os itens filho a cada renderização */
            items.innerHTML = ''
    
            /* Define total da compra inicialmente em 0 */
            let cartTotal = 0
    
            /* Renderiza os itens */
            cartItems.forEach((item) => {
                items.insertAdjacentHTML('beforeend', `
                <div class="cart-item">
                    <img src="${item.img}" alt="${item.nameItem}">
                    <div class="cart-item--info">
                    <h3>${item.nameItem}</h3>
                    <p>R$ ${item.value}</p>
                    <button data-id="${item.id}" class="remove-product">Remover Produto</button>
                    </div>
                </div>
                `)
                
                /* A cada clique a função amplia a soma */
                cartTotal += item.value
            })

            /* define o innerHTML das quantidades e total da compra */
            quantityItems.innerHTML = cartItems.length
            total.innerHTML = `R$ ${cartTotal.toFixed(2)}`
    
            // Adicionar eventos de clique para remover produtos
            const deleteButtons = document.querySelectorAll('.remove-product')
    
            deleteButtons.forEach((button) => {
                button.addEventListener('click', (e) => {
                const productId = Number(e.target.getAttribute('data-id'))
                const productIndex = cartItems.findIndex((item) => item.id === productId)
    
                if (productIndex !== -1) {
                    cartItems.splice(productIndex, 1)
                    renderCart()
                }
                })
            })

            /* Mudanças para estado normal quando todos os itens forem excluidos do carrinho */
            if (cartItems.length === 0) {
                summary.classList.remove('summary')
                summary.classList.add('hidden-summary')
    
                cartMessage.classList.remove('hidden-message')
                cartMessage.classList.add('cart-inside--message')
    
                items.classList.remove('items')
                items.classList.add('hidden-items')
            }
        }
      })
    })
}
  
export { addToCart }  