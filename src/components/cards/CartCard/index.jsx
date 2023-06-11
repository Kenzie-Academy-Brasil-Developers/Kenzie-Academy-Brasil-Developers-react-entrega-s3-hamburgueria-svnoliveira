import { FaTrash } from "react-icons/fa"
import { StyledCartCard } from "./styles"
import { FontHeading3 } from "../../../globalStyles/typography/FontHeading3/styles"
import { StyledButton } from "../../../globalStyles/buttons/styles"

export const CartCard = ({ product, setCartList, cartList}) => {

    const removeProduct = () => {
        if (product.counter === 1) {
            setCartList(cartList.filter(currentProduct => currentProduct.id !== product.id))
        } else {
            const newList = cartList.map((cartProduct) => {
            if (cartProduct.id === product.id){
                
               return {
                    ...cartProduct,
                    counter: cartProduct.counter - 1
                }
            }
            return cartProduct
        })
        setCartList(newList)
        }
    }

    return (
        <StyledCartCard>
            <img src={product.img} alt="product image" />
            <div className="text-container">
                <FontHeading3>{product.name}</FontHeading3>
                <StyledButton>{product.counter}</StyledButton>
                <FaTrash onClick={removeProduct} />
            </div>
        </StyledCartCard>
    )
}