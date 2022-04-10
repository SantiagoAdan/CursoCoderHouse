import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { CartContextProvider } from "./context/CartContext";

const App = () => {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
      <p>Copyrights 2022</p>
    </div>
  );
};

export default App;
