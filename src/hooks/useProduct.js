import { useEffect, useState } from "react";
import {doc, getDoc, getFirestore} from "firebase/firestore";

export default function useProduct(productoId) {
    const [producto, setProducto] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const producto = doc(db, "Productos", productoId);
    if (productoId) {

        getDoc(producto).then((snapshot) => 
            {if(snapshot.exists())
                {setProducto({id: snapshot.id,...snapshot.data()});
        }}).finally(()=> setIsLoading(false))
    }
}, [productoId]);

return { producto, isLoading };
}