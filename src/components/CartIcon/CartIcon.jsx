import carrito from "../../assets/carrito.png"

function CartIcon({ancho,alto}) {
    return (<img src={carrito} alt="carrito" width={ancho} height={alto} />)
}

export default CartIcon;