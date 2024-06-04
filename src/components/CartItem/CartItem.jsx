import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import './CartItem.css'


export default function CartItem({item}){

    const {agregar, eliminar} = useContext(CartContext)

    return (
        <div className="contenedorCart">
            <div className="contenedorImgCart">
                <img src={item.producto.imagen} alt={item.producto.nombre} className="imagenCart"/>
                <p className="tituloNombreCart">{item.producto.nombre}</p>
                <p className="precioCart">Precio: ${item.producto.precio}</p>
                
            </div>
            
            <div className="botones">
            <div className="cantidad"><p className="cantidadCart">Cantidad:</p><p>{item.cantidad}</p></div>
                <button
                    onClick={() => eliminar(item.producto.id, 1)}
                    type="button"
                >
                    -
                </button>
                <button
                    onClick={() => agregar(item.producto, 1)}
                    type="button"
                >
                    +
                </button>
            </div>
        </div>
    );

}