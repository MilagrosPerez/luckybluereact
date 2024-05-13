import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Layout from "./components/Layout/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Layout>

    <Routes>
      <Route path="/" element = {<ItemListContainer greeting="Bienvenidos a Lucky&Blue" />}/>
      <Route path="/categoria/:categoriaNombre" element={<ItemListContainer greeting="Filtrado por categoria" />}/>
      <Route path='/productos/:productoId' element={<ItemDetailContainer />} />
      <Route path="*" element={<h1>No se encontro</h1>} />
    </Routes>

    </Layout>
    </BrowserRouter>
  );
}

export default App;
