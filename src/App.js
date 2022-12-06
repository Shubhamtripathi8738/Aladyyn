import './App.css';
import Header from './Component/Header';
import "./assets/scss/main.scss"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CustomerServices from './Pages/CustomerServices';
import BecomeSeller from './Pages/BecomeSeller';
import SignIn from './Component/SignIn';
import Cart from './Cart';
import Message from './Message';
import SignUp from './Component/SignUp';
import YourAccount from './Pages/YourAccount';
import Notification from './Pages/Notification';
import Wishlist from './Pages/Wishlist';
import UserProfile from './Pages/UserProfile';
import MyAddresses from './Pages/MyAddresses';
import EditUserAddress from './Pages/EditUserAddress';
import EditUserProfile from './Pages/EditUserProfile';

function App() {
  return (
  <>
  <h3>
    <BrowserRouter>
    <Header/>
    <Routes>
    

    <Route path="/" element={<Home />} />
    <Route path="/customer-service" element={<CustomerServices/>} />
    <Route path="/become_a_seller" element={<BecomeSeller/>}/>
    <Route path="/sign_in" element={<SignIn/>}/>
    <Route path="/user/cart" element={<Cart/>}/>
    <Route path="/user/message" element={<Message/>}/>
    <Route path="/create-account" element={<SignUp/>}/>
    <Route path="/user/dashboard" element={<YourAccount/>}/>
    <Route path="/Notification" element={<Notification/>}/>
    <Route path="/wishlist" element={<Wishlist/>}/>
    <Route path="/user/profile" element={<UserProfile/>}/>
    <Route path="/user/my-addresses" element={<MyAddresses/>}/>
    <Route path="/user/my-addresses/edit/:userAddressId" element={<EditUserAddress/>}/>
    <Route path="/user/profile/edit" element={<EditUserProfile/>}/>
    </Routes>
    </BrowserRouter>
  </h3>
  </>
  );
}

export default App;
