import { NavLink } from "react-router-dom";
import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css"
import CartContext from "../../contexts/CartContext";
import { useContext } from "react";

export default function Item({ item }) {
  const { count, increment, decrement, reset } = useCount(0);
  const { agregar } = useContext(CartContext);

  const agregarAlCarrito = () => {
    agregar(item, count);
    reset();
  };

  return (
    <div className="contenedor">
      <div className="contenedorImg">
        <img src={item.imagen} alt={item.title} className="imagen"/>
      </div>
      <NavLink to={`/productos/${item.id}`} className="nombreItem"><h2 className="tituloNombre">{item.nombre}</h2></NavLink>
      
      <p className="descripcion">{item.descripcion}</p>
      <p className="precio">${item.precio}</p>
      <div className="contador">
        <ItemCount stock={item.stock} count={count} increment={increment} decrement={decrement} />
      </div>
      <div>
        <button
          className="botonCompra"
          disabled={count === 0}
          onClick={agregarAlCarrito} >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}