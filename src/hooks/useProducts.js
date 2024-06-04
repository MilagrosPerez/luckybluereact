import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";

export default function useProducts(categoriaNombre) {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const productosColeccion = collection(db, "Productos");
    if (categoriaNombre) {
        const productosQuery = query(
        productosColeccion,
        where("categoria", "==", categoriaNombre)
        );

        getDocs(productosQuery).then((snapshot) => {
            setProductos(snapshot.docs.map((doc) => (
                {id: doc.id,...doc.data(),}))
            );
        }).finally(() => setIsLoading(false));
    } else {
        getDocs(productosColeccion).then((snapshot) => {
            setProductos(snapshot.docs.map((doc) => (
                {id: doc.id,...doc.data(),}))
            );
        }).finally(() => setIsLoading(false));
    }
}, [categoriaNombre]);

return { productos, isLoading };
}