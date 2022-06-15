import React from "react";
import "bulma/css/bulma.min.css";
import { useDispatch } from "react-redux";

import { FaStar } from "react-icons/fa";
import { addToCart } from "../Hafez/store/actions/cart";

function Catalog({ products }) {
  const dispatch = useDispatch();

  return (
    <div className="main m-2 p-2">
      <div className="columns">
        <div className="column">
          <div className="columns is-multiline">
            {products.map((product) => (
              <div key={product._id} className="column is-one-quarter">
                <div className="card">
                  <div className="card-image is-clickable">
                    <img src={product.gallery[0]} alt={product.name} />
                  </div>
                  <div className="card-content">
                    <div className="label">{product.name}</div>
                    <div className="text">{product.description}</div>

                    <div className="tag is-info is-large">
                      {product.price} EGP
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="level">
                      <button
                        className="button is-dark m-2"
                        onClick={() => dispatch(addToCart(product._id))}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
