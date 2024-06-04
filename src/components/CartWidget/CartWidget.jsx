import { useContext } from "react";
import CartIcon from "../CartIcon/CartIcon";
import CartContext from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";

function CartWidget() {
    const {cart} = useContext(CartContext)
    const cantidadCarrito = cart.reduce((acc,item)=>acc+item.cantidad,0)
    return(
        <NavLink to="/carrito">
        <div>
            <CartIcon ancho={'50px'} alto={'50px'} />
            <span>{cantidadCarrito}</span>
        </div>
        </NavLink>

    )
};

export default CartWidget;