import { useState, useEffect } from "react";
import { getProductByCategoria, getProductos } from "../mock/asyncMock";

export default function useProducts(categoria) {
const [productos, setProductos] = useState([]);
const [isLoading, setLoading] = useState(true);

useEffect( () => {
    setLoading(true);
    if (categoria) {
        getProductByCategoria(categoria)
        .then((data) => setProductos(data))
        .finally(() => setLoading(false))
    }
    else {
    getProductos()
    .then((data) => setProductos(data))
    .finally(() => setLoading(false)) }
}, [categoria])

return {productos, isLoading} 
}