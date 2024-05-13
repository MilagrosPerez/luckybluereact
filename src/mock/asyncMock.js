import arnesajustable from "../assets/arnesajustable.png";
import correaretractil from "../assets/correaretractil.png";
import collarreflectante from "../assets/collarreflec.jpg";
import abrigoimp from "../assets/abrigoimp.jpg"
import arnesauto from "../assets/arnesauto.jpeg"
import correa from "../assets/correa.jpg"
import collarantipulgas from "../assets/collarantipulgas.png"
import abrigotermico from "../assets/abrigotermico.jpg"


const productos = [
  {
    id: 1,
    nombre: "Arnés ajustable",
    descripcion: "Arnés cómodo y ajustable para paseos seguros con tu perro",
    stock: 100,
    categoria: "arneses",
    precio: 25.99,
    imagen: arnesajustable
  },
  {
    id: 2,
    nombre: "Correa retráctil",
    descripcion: "Correa retráctil para mayor libertad de movimiento durante los paseos",
    stock: 50,
    categoria: "correas",
    precio: 15.49,
    imagen: correaretractil
  },
  {
    id: 3,
    nombre: "Collar reflectante",
    descripcion: "Collar con material reflectante para mayor visibilidad durante la noche",
    stock: 80,
    categoria: "collares",
    precio: 10.99,
    imagen: collarreflectante
  },
  {
    id: 4,
    nombre: "Abrigo impermeable",
    descripcion: "Abrigo resistente al agua para proteger a tu perro de la lluvia",
    stock: 60,
    categoria: "abrigos",
    precio: 35.79,
    imagen: abrigoimp
  },
  {
    id: 5,
    nombre: "Arnés de seguridad para automóvil",
    descripcion: "Arnés especial para asegurar a tu perro durante los viajes en automóvil",
    stock: 30,
    categoria: "arneses",
    precio: 29.99,
    imagen: arnesauto
  },
  {
    id: 6,
    nombre: "Correa de adiestramiento",
    descripcion: "Correa resistente para sesiones de adiestramiento y obediencia",
    stock: 70,
    categoria: "correas",
    precio: 20.99,
    imagen: correa
  },
  {
    id: 7,
    nombre: "Collar antipulgas",
    descripcion: "Collar que repele pulgas y garrapatas para proteger a tu perro de parásitos",
    stock: 90,
    categoria: "collares",
    precio: 12.49,
    imagen: collarantipulgas
  },
  {
    id: 8,
    nombre: "Abrigo térmico",
    descripcion: "Abrigo con material térmico para mantener a tu perro caliente en invierno",
    stock: 40,
    categoria: "abrigos",
    precio: 45.99,
    imagen: abrigotermico
  },
];


export const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.find((producto) => producto.id == id));
      }, 2000);
    });
  };
  
  export const getProductByCategoria = (categoria) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos.filter((producto) => producto.categoria === categoria));
      }, 2000);
    });
  };