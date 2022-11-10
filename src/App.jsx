import "./App.css";
import Navbar from "./components/Navbar";
import Productos from "./components/Productos";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Productos />} />
            <Route path="/categoria/:categoriaId" element={<Productos />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
