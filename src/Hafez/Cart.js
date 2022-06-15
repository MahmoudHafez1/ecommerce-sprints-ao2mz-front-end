import CartItem from "./CartItem";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import LoadingScreen from "../Hamdy/LoadingScreen";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const [cartItems, setCartItems] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState("");

  const getCartItems = async () => {
    try {
      setLoading("active");
      setCartItems({});
      const ids = Object.keys(cart);
      for (let i = 0; i < ids.length; i++) {
        const quantity = cart[ids[i]];
        const res = await fetch(`https://fakestoreapi.com/products/${ids[i]}`);
        const json = await res.json();
        setCartItems((state) => {
          return {
            ...state,
            [json.id]: {
              product: json,
              quantity,
              price: json.price * quantity,
            },
          };
        });
      }
    } catch {
      alert("something went wrong");
    } finally {
      setLoading("");
    }
  };

  useEffect(() => {
    if (Object.keys(cart).length > 0) {
      getCartItems();
    } else {
      setCartItems({});
    }
  }, [cart]);

  useEffect(() => {
    if (cartItems) {
      let sum = 0;
      Object.keys(cartItems).forEach(
        (itemId) => (sum += cartItems[itemId].price)
      );
      setTotalPrice(sum);
    }
  }, [cartItems]);

  return (
    <>
      <LoadingScreen state={loading} />
      <div className="container is-fluid">
        {totalPrice > 0 && (
          <div className="card mb-3 mt-1">
            <div className="card-content is-flex is-justify-content-space-between is-align-items-center">
              <div>
                <p className="title is-4">Total Price</p>
                <p className="title is-3">{totalPrice} EGP</p>
              </div>
              <button className="button is-primary">Checkout</button>
            </div>
          </div>
        )}
        {cartItems &&
          Object.keys(cartItems).map((itemId) => (
            <CartItem
              key={itemId}
              product={cartItems[itemId].product}
              quantity={cartItems[itemId].quantity}
              price={cartItems[itemId].price}
            />
          ))}
      </div>
    </>
  );
};

export default Cart;
