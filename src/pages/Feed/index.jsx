import { useEffect, useState } from "react"
import { Header } from "../../components/Header/"
import { Modal } from "../../components/Modal/"
import { ProductList } from "../../components/ProductList/"
import { api } from "../../services/api.js"


export const Feed = () => {  
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [isModal, setIsModal] = useState(false)
    const [cartList, setCartList] = useState([])
    
    const filteredList = productList.filter(
        product => product.name.toUpperCase().includes(searchTerm.toUpperCase())
    )

    useEffect(() => {
        const getList = async () => {
            try {
                setLoading(true)
                const response = await api.get('/products')
                setProductList(response.data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        getList()
    },[])

    return (
    <>
        <Header setSearchTerm={setSearchTerm} setIsModal={setIsModal} cartList={cartList}/>

        {loading ? <h1>Loading</h1> :
        <main>
            <ProductList filteredList={filteredList} setCartList={setCartList} cartList={cartList}/>
        </main>
        }

        {isModal ? <Modal setCartList={setCartList} cartList={cartList} setIsModal={setIsModal} /> : null }
    </>
    )
}