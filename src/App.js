import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Store from "./pages/Store/Store";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
