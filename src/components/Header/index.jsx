
import logo from "../../assets/logo.png"
import { FaShoppingCart, FaSearch } from "react-icons/fa"

export const Header = ({setSearchTerm, setIsModal, cartList}) => {
    
    return (
    <>
        <img src={logo} alt="Ícone da hamburgueria Burger Kenzie, Burger soletrado na cor preta e Kenzie soletrado na cor Rosa" />
        <div id="header__right-container">
            <div id="cart-counter">{cartList.reduce((total, product) => {return total + product.counter},0)}</div>
            <FaShoppingCart onClick={() => {setIsModal(true)}}/>
            <div>
                <input type="text" placeholder="Digitar Sua pesquisa" required onChange={(e) => {setSearchTerm(e.target.value)}}/>
                <button id="search-button"><FaSearch /></button>
            </div>
        </div>
    </>
    )
}