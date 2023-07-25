const React = require('react');

module.exports = function Navbar({ userLogin }) {
  return (
    <nav className="nav-main">
      <div className="nav-wrapper deep-purple darken-1">
        <a href="/" className="brand-logo"> Интренет магазин </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {userLogin ? (
              <>
                <li>
                  <a href="/" className="a_navbar">
                    Товары
                  </a>
                </li>
                <li>
                  <a href="/carts" className="a_navbar">
                    Корзина
                  </a>
                </li>
                <li className="logout">
                  <a href="#" className="a_navbar">
                    LogOut
                  </a>
                </li>
                <li className="userLogin">
                  <a href="#" className="a_navbar"> {userLogin} </a>
                </li>
              </>
          ) : (
            <>
              <li>
                <a href="/" className="a_navbar">
                  Товары
                </a>
              </li>
              <li>
                <a href="/auth/log" className="a_navbar">
                  LogIn
                </a>
              </li>
              <li>
                <a href="/auth/reg" className="a_navbar">
                  Регистрация
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
