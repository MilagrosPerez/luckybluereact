import Item from "./Item";
import "./Item.css";

export default function ItemList({ productos }) {
  return (
    <div className="productos">
      {productos.map((producto) => (
        <Item key={producto.id} item={producto} />
      ))}
    </div>
  );
}