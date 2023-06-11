import { ProductCard } from "../cards/ProductCard"
import { CardList } from "./styles"

export const ProductList = ({filteredList, setCartList, cartList}) => {
    return (
        <CardList>
            {filteredList.map(product => {
                return(
                <ProductCard key={product.id} product={product} setCartList={setCartList} cartList={cartList}/>
                )
            })}
        </CardList>
    )
}