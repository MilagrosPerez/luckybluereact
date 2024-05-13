import { useState, useEffect } from "react";
import { getProductByCategoria } from "../mock/asyncMock";

export default function useProduct() {
const [productos, setProductos] = useState([]);
const [isLoading, setLoading] = useState(true);

useEffect( (categoria) => {
    getProductByCategoria(categoria)
    .then((data) => setProductos(data))
    .finally(() => setLoading(false))
}, [])

return {productos, isLoading} 
}