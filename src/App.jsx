import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Layout from "./components/Layout/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import CartProvider from "./contexts/CartProvider";
import CartContainer from "./components/CartContainer/CartContainer";
import CheckoutContainer from "./components/CheckoutContainer/CheckoutContainer";

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
    <Layout>
    <Routes>
      <Route path='/' element = {<ItemListContainer greeting="Bienvenidos a Lucky&Blue" />}/>
      <Route path='/categoria/:categoriaNombre' element={<ItemListContainer greeting="Filtrado por categoria" />}/>
      <Route path='/productos/:productoId' element={<ItemDetailContainer />} />
      <Route path='/carrito' element={<CartContainer />} />
      <Route path='/checkout' element={<CheckoutContainer />} />
      <Route path='*' element={<h1>No se encontro</h1>} />
    </Routes>
    </Layout>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;
