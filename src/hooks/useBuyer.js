import { useState } from "react";

export default function useBuyer() {
    const [compra, setCompra] = useState({nombre:"", correo:"", direccion:""});

    const handleInputChange = (e) => {
        setCompra({compra, [e.target.nombre]: e.target.value});
    }

    return {compra, handleInputChange}

};