import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  const onAdd = (quantity) => {
    console.log(quantity);
  };
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ItemListContainer greeting={"Hola Usuario!"} />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer greeting={"Hola usuario!"} />}
          />
          <Route path="/item/:productId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
