import { FaTrash } from "react-icons/fa"
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
        <li>
            <img src={product.img} alt="product image" />
            <div className="text-container">
                <span>{product.name}</span>
                <div>{product.counter}</div>
                <FaTrash onClick={removeProduct}/>
            </div>
        </li>
    )
}