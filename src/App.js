import "bulma/css/bulma.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Hafez/Cart";
import { Provider } from "react-redux";
import Homepage from "./Hamdy/Homepage";
import Login from "./Hamdy/Login";
import Navbar from "./Hafez/Navbar";
import store from "./Hafez/store/store";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState();
  const authHandler = (token) => {
    localStorage.setItem("auth", token);
    setAuth(token);
  };
  console.log(auth);
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar auth={auth} />
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/:categoryId" element={<Homepage />} />
            <Route path="/search/:searchQuery" element={<Homepage />} />
            <Route
              path="/login"
              element={<Login authHandler={authHandler} />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
