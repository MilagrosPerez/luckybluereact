import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {
    const params = useParams()
    const {productoId} = params

    const {producto, isLoading} = useProduct(productoId);

    if (isLoading) return (<h2>Cargando..</h2>);

    if (!producto) {
        return <h1>Producto no encontrado</h1>;
      }

    console.log([producto])
    return (<div><ItemDetail item={producto} /></div>)

};