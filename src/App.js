import './App.css';
import { Routes,Route, BrowserRouter } from "react-router-dom";
import HomePage from './pages/HomePage';
import BookingPage from "./pages/BookingPage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";
import ConfirmedBooking from './pages/ConfirmedBooking';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/menu" element={<MenuPage/>}></Route>
          <Route path="/booking" element={<BookingPage/>}></Route>
          <Route path="/order" element={<OrderPage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/confirmed" element={<ConfirmedBooking/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
