import CartItem from "../CartItem/CartItem"
import './CartDetails.css'

export default function CartDetails({cart, total}){

    if (cart.length === 0) {
        return <h2>Carrito Vacío</h2>
    }

    return (
        <div> 
            <div className="productosCarrito">
                {cart.map((item)=>(
                    <CartItem key={item.producto.id} item={item}/>
                ))}
            </div>
            <br />
            <h2>TOTAL: ${total} </h2>
        </div>
    )

}