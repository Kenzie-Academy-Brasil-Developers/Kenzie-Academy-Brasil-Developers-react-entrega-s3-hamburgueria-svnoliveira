import { useState } from "react"
import { ProductCard } from "../Cards/ProductCard"
import { CardList } from "./styles"

export const ProductList = ({filteredList, setCartList, cartList}) => {

    const [isSelected, setIsSelected] = useState(null)

    return (
        <CardList >
            {filteredList.map(product => {
                return(
                <ProductCard key={product.id} product={product} 
                setCartList={setCartList} cartList={cartList}
                isSelected={isSelected} setIsSelected={setIsSelected}/>
                )
            })}
        </CardList>
    )
}