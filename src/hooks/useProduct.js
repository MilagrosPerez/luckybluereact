import { useState, useEffect } from "react";
import { getProductById } from "../mock/asyncMock";

export default function useProduct(id) {
const [producto, setProducto] = useState([]);
const [isLoading, setLoading] = useState(true);

useEffect( () => {
    getProductById(id)
    .then((data) => setProducto(data))
    .finally(() => setLoading(false))
}, [id])

return {producto, isLoading} 
}