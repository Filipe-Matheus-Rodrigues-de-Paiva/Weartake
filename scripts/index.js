import { data } from "./database.js"
import showProducts from "./showProducts.js"
import filterMenu from "./menuFilter.js"
import searchBar from "./searchbar.js"
import {addToCart} from "./cart.js"

/* Features */
showProducts(data) // DOM
filterMenu(data) // Filtro Menu
searchBar(data) // Filtro barra de pesquisa
addToCart(data) // adicionar ao carrinho