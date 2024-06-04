import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";
import CartDetails from "../CartDetails/CartDetails";
import './CartContainer.css'

export default function CartContainer({ item }) {
    const { cart, limpiar, total } = useContext(CartContext);

    if (cart.length === 0 ){
        return <h1>Carrito Vacio</h1>;
    }

    return (
    <div className="contenedorCarrito">
        <div>
            <h2>Mi Carrito</h2>
            <br />
            <CartDetails cart={cart} total={total}/>
        </div>
        <br />
        <div className="botonesCart">
        <div>
            <button className="botonLimpiar" onClick={limpiar}>
                Limpiar Carrito
            </button>
        </div>

        <NavLink className="botonFinalizar" to="/checkout">
            Finalizar Compra
        </NavLink>
        </div>

    </div>
);
}




