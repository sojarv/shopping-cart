import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div id="nav-items">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/items">Items</Link>
        </div>
      </div>
      <div id="cart">
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
