import React from "react";
import "bulma/css/bulma.min.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../Hafez/store/actions/cart";


function Catalog({ products }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="main m-2 p-2">
      <div className="columns">
        <div className="column">
          <div className="columns is-multiline">
            {products.map((product) => (
              <div key={product.id} className="column is-one-quarter">
                <div className="card">
                  <div className="card-image is-clickable">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      onClick={(() => navigate(`/product/${product.id}`))} 
                    />
                    <div className="is-bold">
                      {product.rating.rate} /5
                      {[...Array(parseInt(product.rating.rate))].map((e, i) => (
                        <FaStar />
                      ))}
                    </div>
                  </div>
                  <div className="card-content">
                    <h4 className="label">{product.title}</h4>
                    <p className="text product--description">{product.description}</p>

                    <div className="tag is-info is-large">
                      {product.price} EGP
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="level">
                      <button
                        className="button is-dark m-2"
                        onClick={() => dispatch(addToCart(product.id))}
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
