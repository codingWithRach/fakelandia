import { HashRouter } from "react-router-dom";
import "./App.css";
import Router from "./components/router/router";

function App() {
  return (
    <>
      <HashRouter>
        <Router />
      </HashRouter>
    </>
  );
}

export default App;
