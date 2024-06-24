import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./Routes/Root";

function App() {
  return (
    <BrowserRouter>
      <Root></Root>
    </BrowserRouter>
  );
}

export default App;
