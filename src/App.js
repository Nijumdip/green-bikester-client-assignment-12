import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import NavMenu from "./Pages/Home/NavMenu";
import Login from "./Pages/Login/Login";
import Purchases from "./Pages/Purchase/Purchases";
import Footer from "./Pages/Shared/Footer";
import Page404 from "./Pages/Shared/Page404";

function App() {
  return (
    <div className="App">
      <NavMenu></NavMenu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="purchase" element={<Purchases />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
