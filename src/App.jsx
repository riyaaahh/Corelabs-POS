import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Login from './pages/Login'; 
import Otp from './pages/Otp'; 
import Location from './pages/Location';
import Details from './pages/Details'; 
import Cart from './pages/Cart'; 
import Address from './pages/Address'; 
import AddressDetails from './pages/AddressDetails'; 
import ConfirmLocation from './pages/ConfirmLocation';
import PaymentMethod from './pages/PaymentMethod'; 
import OrderTracking from './pages/OrderTracking'; 
import OrderDetails from './pages/OrderDetails'; 







import Landing from './pages/Landing'; 




import './App.css'; 
 

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/location" element={<Location/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/landing" element={<Landing/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Address" element={<Address/>} />
        <Route path="/AddressDetails" element={<AddressDetails/>} />
        <Route path="/ConfirmLocation" element={<ConfirmLocation/>} />
        <Route path="/PaymentMethod" element={<PaymentMethod/>} />
        <Route path="/OrderTracking" element={<OrderTracking/>} />
        <Route path="/OrderDetails" element={<OrderDetails/>} />





      </Routes>
    </Router>
  );
}

export default App;