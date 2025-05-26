import React, { useContext } from 'react';
import cartContext from '../context/cartContext';

const Header = () => {
  const { cartItems, toggleCart } = useContext(cartContext);
  const cartQuantity = cartItems.length;

  return (
    <header id="header">
      <div className="container navbar">
        <nav className="nav_side nav_left">
          <ul>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#visit">Visit</a></li>
            <li><a href="#info">Info</a></li>
          </ul>
        </nav>

        <div className="logo_center">
          {/* logo lola */}
          <img src="/images/lola_logo.svg" alt="Lola Logo" className="logo_svg" />
        </div>

        <div className="nav_side nav_right">
          <div
            title="Cart"
            className="cart_icon"
            onClick={() => toggleCart(true)}
          >
            <img src="/images/bag-icon.svg" alt="bag-icon" />
            {cartQuantity >= 1 && <span className="badge">{cartQuantity}</span>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;