import './App.css';
//import Description from './compnents/Description';
//import Footer from './compnents/Footer';
import { Routes,Route } from "react-router-dom";
import HomePage from './compnents/HomePage';
import BookingPage from "./compnents/BookingPage";
import AboutPage from "./compnents/AboutPage";
import MenuPage from "./compnents/MenuPage";
import OrderPage from "./compnents/OrderPage";
import LoginPage from "./compnents/LoginPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/menu" element={<MenuPage/>}></Route>
        <Route path="/booking" element={<BookingPage/>}></Route>
        <Route path="/order" element={<OrderPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
      {/*<Footer/>*/}
      <h1>Hello</h1>
    </>
  );
}

export default App;
