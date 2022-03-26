import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  const onAdd = (quantity) =>{
    console.log(quantity);
  }
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola Usuario!" />
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </>
  );
};

export default App;
