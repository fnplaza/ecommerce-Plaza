import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Rutas from "./routes";
import Main from "./components/Main/Main";

function App() {
  return (
    <Main>
      <Rutas />
    </Main>
  );
}

export default App;
