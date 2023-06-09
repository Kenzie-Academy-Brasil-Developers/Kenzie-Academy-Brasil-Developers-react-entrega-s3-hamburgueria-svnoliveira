import { useEffect, useRef } from "react"
import { CartCard } from "../cards/CartCard"

export const Modal = ({ cartList, setCartList, setIsModal }) => {

    const cartTotal = cartList.reduce((total, item) => { return (item.price * item.counter) + total },0 )
    .toLocaleString('pt-BR', {currency: 'BRL', style: 'currency'})

    const modalRef = useRef(null)

    useEffect(()=> {
        const handleOutClick = (event) => {
            if (!modalRef.current?.contains(event.target)){
                setIsModal(false)
            }
        }

        window.addEventListener("mousedown", handleOutClick)
        return () => {
            window.removeEventListener("mousedown", handleOutClick)
        }
    },[])

    

    useEffect(()=> {
        const handleClickClose = (event) => {
            if (event.key === "Escape") {
                modalRef.current? setIsModal(false) : null
            }
        }

        window.addEventListener("keydown", handleClickClose)
        return () => {
            window.removeEventListener("keydown", handleClickClose)
        }
    })
    return (
        <>
    
        <section role="dialog">
            <div className="modal-container" ref={modalRef}>
                <div id="modal-header">
                    <h2>Carrinho de compras</h2>
                    <button onClick={() => setIsModal(false)}>X</button>
                </div>
                <ul>
                    {cartList.map((product => {
                        return(
                            <CartCard key={product.id} product={product} setCartList={setCartList} cartList={cartList}/>
                        )
                    }))}
                </ul>
                <div className="price-container">
                    <span>Total</span>
                    <span>{cartTotal}</span>
                </div>
                <button onClick={() => setCartList(cartList.filter(product => product.id < 0))}>Remover Todos</button>
            </div>
        </section>
        </>
    )
}