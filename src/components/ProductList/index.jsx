import { ProductCard } from "../cards/ProductCard"

export const ProductList = ({filteredList, setCartList, cartList}) => {
    return (
        <ul>
            <h1>List</h1>
            {filteredList.map(product => {
                return(
                <ProductCard key={product.id} product={product} setCartList={setCartList} cartList={cartList}/>
                )
            })}
        </ul>
    )
}