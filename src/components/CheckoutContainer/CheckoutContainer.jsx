import {useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import useBuyer from "../../hooks/useBuyer";
import CartDetails from '../CartDetails/CartDetails'

export default function CheckoutContainer(){
    const {cart, limpiar, total} = useContext(CartContext);
    const {compra, handleInputChange} = useBuyer();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const compras = {compra, cart, total};
    
        const db = getFirestore();
        // antes de hacer el addDoc, verifico que haya stock suficiente para todos los productos
        for (const itemInCart of cart) {
            const productoRef = doc(db, "Productos", itemInCart.producto.id);
            const producto = await getDoc(productoRef);
            const productoData = producto.data();
            if (productoData.stock < itemInCart.cantidad) {
                return <h2>No hay stock para el producto ${productoData.nombre}</h2>;
            }
        };
    
        const compraColeccion = collection(db, "Compras");
    
        addDoc(compraColeccion, compra).then(async ({ id }) => {
            alert(`Compra realizada con éxito, tu número de orden es: ${id}`);
            limpiar();
    
            for (const itemInCart of cart) {
                const productoRef = doc(db, "Productos", itemInCart.producto.id);
                const producto = await getDoc(productoRef);
                const productoData = producto.data();
    
                const nuevoStock = productoData.stock - itemInCart.cantidad;
    
                await updateDoc(productoRef, { stock: nuevoStock });
            }
        });
    };
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" placeholder="Nombre completo" value={compra.nombre} onChange={handleInputChange} required/>
            
                <label>Correo</label>
                <input type="email" placeholder="Correo Electronico" value={compra.correo} onChange={handleInputChange} required/>
            
                <label>Direccion</label>
                <input type="text" placeholder="Direccion" value={compra.direccion} onChange={handleInputChange}/>
            
            <CartDetails cart={cart} total={total} />
            <br />
            <button type="submit">
                Finalizar Compra
            </button>
        </form>
        </div>
    );



};