import ItemList from "../Item/ItemList";
import useProducts from "../../hooks/useProducts"
import { useParams } from "react-router-dom";


function ItemListContainer({saludo}) {
    const {categoriaNombre} = useParams();

    const {isLoading, productos} = useProducts(categoriaNombre);

    if (isLoading) return (<h2>Cargando..</h2>);

    return (
        <div>
            <h2>{saludo}</h2>
            <ItemList productos={productos} />
        </div>)
}

export default ItemListContainer;