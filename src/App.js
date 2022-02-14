import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer textillo="ItemListContainer" />
      <Footer />
    </div>
  );
}

export default App;
