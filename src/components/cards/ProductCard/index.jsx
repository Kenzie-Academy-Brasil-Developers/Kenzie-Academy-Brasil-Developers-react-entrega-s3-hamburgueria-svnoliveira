import { StyledButton } from "../../../globalStyles/buttons/styles"
import { FontHeading2 } from "../../../globalStyles/typography/FontHeading2/styles.js"
import { FontCaption } from "../../../globalStyles/typography/FontCaption/styles.js"
import { FontBody600 } from "../../../globalStyles/typography/FontBody600/styles.js"
import { StyledProductCard } from "./styles"

export const ProductCard = ({product, setCartList, cartList}) => {

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

    // const startItemCounter = () => {
    //     if(!product.counter){
    //         updateCartList(1)
    //         return product.counter
    //     } else {
    //         return product.counter
    //     }
    // }
    
    return (
        <StyledProductCard>
            <picture>
                <img src={product.img} alt="product" />
            </picture>
            <div>
                <FontHeading2>{product.name}</FontHeading2>
                <FontCaption>{product.category}</FontCaption>
                <FontBody600>{productPrice}</FontBody600>
            </div>
            <StyledButton mode="medium" color="grey" onClick={addProduct}>Adicionar</StyledButton>
        </StyledProductCard>
    )
}