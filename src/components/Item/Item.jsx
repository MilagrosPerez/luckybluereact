import { NavLink } from "react-router-dom";
import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css"

export default function Item({ item }) {
  const { count, increment, decrement } = useCount(0);

  const onAdd = (nombreDeItem, cantidadaLlevar) => {
    console.log("nombreDeItem: ", nombreDeItem);
    console.log("cantidadaLlevar: ", cantidadaLlevar);
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
          onClick={() => onAdd(item, count)} >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}