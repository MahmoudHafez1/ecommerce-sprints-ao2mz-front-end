import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

function Filter({ sortProducts }) {
  return (
    <div className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Sort By</p>
          <p className="title">Price</p>

          <button
            onClick={() => sortProducts("price", "asc")}
            className="button is-primary is-small"
          >
            <span className="icon is-small">
              <FaArrowAltCircleDown />
            </span>
          </button>
          <button
            onClick={() => sortProducts("price", "desc")}
            className="button is-danger is-small"
          >
            <span className="icon is-small">
              <FaArrowAltCircleUp />
            </span>
          </button>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Sort By</p>
          <p className="title">Rating</p>
          <button className="button is-primary is-small">
            {" "}
            <span className="icon is-small">
              <FaArrowAltCircleDown />
            </span>
          </button>
          <button className="button is-danger is-small">
            {" "}
            <span className="icon is-small">
              <FaArrowAltCircleUp />
            </span>
          </button>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Sort By</p>
          <p className="title">Name</p>
          <button className="button is-primary is-small">
            {" "}
            <span className="icon is-small">
              <FaArrowAltCircleDown />
            </span>
          </button>
          <button className="button is-danger is-small">
            {" "}
            <span className="icon is-small">
              <FaArrowAltCircleUp />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
