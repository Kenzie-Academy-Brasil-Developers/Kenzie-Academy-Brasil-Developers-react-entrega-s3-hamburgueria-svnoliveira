import { StyledButton } from "../../../globalStyles/Buttons/styles"
import { FontHeading2 } from "../../../globalStyles/Typography/FontHeading2/styles.js"
import { FontCaption } from "../../../globalStyles/Typography/FontCaption/styles.js"
import { FontBody600 } from "../../../globalStyles/Typography/FontBody600/styles.js"
import { StyledProductCard } from "./styles"

export const ProductCard = ({product, setCartList, cartList, isSelected, setIsSelected}) => {

    const productPrice = product.price.toLocaleString('pt-BR', {currency: 'BRL', style: 'currency'})

    const updateCartList = () =>{
        
        const newList = cartList.map((cartProduct) => {
            if (cartProduct.id === product.id){
                
               return {
                    ...cartProduct,
                    counter: cartProduct.counter + 1
                }
            }
            return cartProduct
        })
        setCartList(newList)
    }

    const addProduct = () => {
        if (cartList.some((cartProduct) => {
            return cartProduct.id === product.id
        })) {
            updateCartList()
        } else {
            const newProduct = {...product, counter: 1}
            setCartList(cartList => [...cartList, newProduct])
        }

    }

    const handleSelection = (clickedCardId) => {
        setIsSelected(clickedCardId)
    }

    return (
        <StyledProductCard  color={product.id === isSelected ? "green" : "grey"} onMouseDown={() => {handleSelection(product.id)}}>
            <picture>
                <img src={product.img} alt="product" />
            </picture>
            <div>
                <FontHeading2>{product.name}</FontHeading2>
                <FontCaption>{product.category}</FontCaption>
                <FontBody600>{productPrice}</FontBody600>
            </div>
            <StyledButton mode="medium" color={product.id === isSelected ? "green" : "grey"} onClick={addProduct}>Adicionar</StyledButton>
        </StyledProductCard>
    )
}