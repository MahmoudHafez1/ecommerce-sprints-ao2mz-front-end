import React, { useState } from "react";
import "bulma/css/bulma.min.css";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    access: localStorage.getItem("ip"),
  });
  const changeHandler = (prop) => (event) => {
    setUser({ ...user, [prop]: event.target.value });
  };

  React.useEffect(() => {
    localStorage.clear();
  }, []);

  const LoginClick = (e) => {
    /**
     * Login API here
     */
  };
  return (
    <>
      <section className="hero is-fullheight has-background-white">
        <div className="hero-body has-text-centerd">
          <div className="container ">
            <div className="columns is-gapless is-centered">
              <div className="column has-background-white"></div>
              <div className="column has-background-light">
                <article class="panel is-dark is-shadowless has-text-centered p-2">
                  <p class="panel-heading">Ecommerce </p>
                </article>
                <div className="field p-2">
                  <div className="label">Email</div>
                  <div class="control">
                    <input
                      value={user.email}
                      name="name"
                      onChange={changeHandler("email")}
                      id="name"
                      className="input"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="field p-2">
                  <div className="label">Password</div>
                  <div class="control">
                    <input
                      value={user.password}
                      name="password"
                      onChange={changeHandler("password")}
                      id="pass"
                      className="input"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="field p-2 has-text-centered">
                  <button onClick={LoginClick} className="button is-info">
                    Login
                  </button>
                </div>
              </div>
              <div className="column has-background-white"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
