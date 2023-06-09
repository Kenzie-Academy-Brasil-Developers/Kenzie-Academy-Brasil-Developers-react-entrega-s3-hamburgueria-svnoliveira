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
        <li>
            <img src={product.img} alt="product" />
            <div className="text-container">
                <h2>{product.name}</h2>
                <span>{product.category}</span>
                <p>{productPrice}</p>
                </div>
            <button onClick={addProduct}>Adicionar</button>
        </li>
    )
}