import {useEffect, useState } from "react";
import CartContext from "./CartContext"

export default function CartProvider({children}){
    const [cart,setCart] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [])
    const agregar = (producto, cantidad) => {
        const itemInCart = cart.find((item) => item.producto.id === producto.id);
        if (itemInCart) {
            const modificar = cart.map((item) => {
                if (item.producto.id === producto.id) {
                    return { producto, cantidad: item.cantidad + cantidad };
                }
                return item;
            });
            setCart(modificar);
        } else {
        setCart([...cart, { producto, cantidad }]);
        }
    };


    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const eliminar = (productoId, cantidad) => {
        const itemInCart = cart.find((item) => item.producto.id === productoId);
        if (itemInCart) {
            const modificar = cart.map((item) => {
            if (item.producto.id === productoId) {
                return { producto: item.producto, cantidad: item.cantidad - cantidad };
            }
            return item;
        });
    
        const filteredCart = modificar.filter((item) => item.cantidad > 0);
    
        setCart(filteredCart);
        }
    };
    
    const limpiar = () => {
        setCart([]);
    };
    
    const total = cart
        .reduce((acc, item) => {
          return acc + item.producto.precio * item.cantidad;
        }, 0);
    
    return (
        <CartContext.Provider
        value={{ cart, agregar, eliminar, limpiar, total }}
        >
        {children}
        </CartContext.Provider>
    );

}
