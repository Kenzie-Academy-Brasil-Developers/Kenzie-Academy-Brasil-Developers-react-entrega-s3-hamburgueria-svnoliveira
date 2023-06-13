
import logo from "../../assets/logo.png"
import { FaShoppingCart, FaSearch } from "react-icons/fa"
import { StyledHeader } from "./styles"
import { StyledButton, StyledInput } from "../../globalStyles/Buttons/styles"

export const Header = ({setSearchTerm, setIsModal, cartList}) => {
    
    return (
        <header>
    		<StyledHeader>
        		<div id="header-left-container">
            		<img src={logo} alt="Ícone da hamburgueria Burger Kenzie, Burger soletrado na cor preta e Kenzie soletrado na cor Rosa" />
            		<div  onClick={() => {setIsModal(true)}}>
            		    <StyledButton color="green">{cartList.reduce((total, product) => {return total + product.counter},0)}</StyledButton>
            	    	<FaShoppingCart />
            		</div>
        		</div>
        		<div id="header-right-container">
            		<StyledInput type="text" placeholder="Digitar Sua pesquisa" required onChange={(e) => {setSearchTerm(e.target.value)}}/>
            		<StyledButton mode="medium" color="green"><FaSearch /></StyledButton>
        		</div>
    		</StyledHeader>
        </header>
    )
}