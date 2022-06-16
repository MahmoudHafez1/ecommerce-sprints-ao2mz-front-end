import "bulma/css/bulma.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Hafez/Cart";
import { Provider } from "react-redux";
import Homepage from "./Hamdy/Homepage";
import Login from "./Hamdy/Login";
import Navbar from "./Hafez/Navbar";
import store from "./Hafez/store/store";
import './App.css'
import Product from "./Hamdy/Product";

function App() {
  return (
    <main className="main">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/:categoryId" element={<Homepage />} />
            <Route path="/search/:searchQuery" element={<Homepage />} />
            <Route path="/" element={<Login />} />
            <Route path="/product/:productId" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </main>
  );
}

export default App;
