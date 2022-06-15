import { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const Navbar = ({ auth }) => {
  const [categories, setCategories] = useState();
  const [searchQ, setSearchQ] = useState();
  const navigate = useNavigate();

  const Search = () => {
    //searchQ === ""
    //  ? setFilter(products)
    //: setFilter(products.filter((item) => item.title.indexOf(searchQ) !== -1));
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="https://i.ibb.co/SRVw6K4/Daco-4160577.png" />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a
            key={"all"}
            className="navbar-item"
            onClick={() => navigate(`/homepage`)}
          >
            All PROUDCTS
          </a>
          {categories &&
            categories.map((cat) => (
              <a
                key={cat}
                className="navbar-item"
                onClick={() => navigate(`/${cat}`)}
              >
                {cat.toUpperCase()}
              </a>
            ))}
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate(`/search/${searchQ}`);
              }}
            >
              <input
                className="input is-primary"
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchQ(e.target.value)}
              />
            </form>
          </div>
          <div
            className="navbar-item"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("cart")}
          >
            <BsCart4 size={25} />
            <span style={{ marginLeft: "0.5rem" }}>Cart</span>
          </div>
          <div className="navbar-item">
            <VscAccount size={25} />
            <span
              style={{ marginLeft: "0.5rem", cursor: "pointer" }}
              onClick={() => {
                if (auth) {
                  navigate("/profile");
                } else {
                  navigate("/login");
                }
              }}
            >
              {auth ? `My account` : `Login`}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
