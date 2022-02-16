import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/UI/Footer";
import Rutas from "./routes";
import Accordion from "./components/Accordion/Accordion";
import Main from "./components/Main/Main";

function App() {
  return (
    <Main>
      <Rutas />
    </Main>
  );
}

export default App;
