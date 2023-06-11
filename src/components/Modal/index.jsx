import { useEffect, useRef } from "react"
import { CartCard } from "../cards/CartCard"
import { StyledModal } from "./styles"
import { FontHeading3 } from "../../globalStyles/typography/FontHeading3/styles.js"
import { FontBody600 } from "../../globalStyles/typography/FontBody600/styles"
import { StyledButton } from "../../globalStyles/buttons/styles"

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
    
        <StyledModal role="dialog">
            <div ref={modalRef}>
                <div id="modal-header">
                    <FontHeading3>Carrinho de compras</FontHeading3>
                    <button onClick={() => setIsModal(false)}>X</button>
                </div>
                <ul>
                    {cartList.map((product => {
                        return(
                            <CartCard key={product.id} product={product} setCartList={setCartList} cartList={cartList}/>
                        )
                    }))}
                </ul>
                <div id="price-container">
                    <FontBody600 color="black">Total</FontBody600>
                    <FontBody600>{cartTotal}</FontBody600>
                </div>
                <StyledButton mode="default" color="grey" onClick={() => setCartList(cartList.filter(product => product.id < 0))}>Remover Todos</StyledButton>
            </div>
        </StyledModal>
        </>
    )
}