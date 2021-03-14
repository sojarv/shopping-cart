import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Cart from './Cart';
import DetailInfo from './DetailInfo';
import Items from './Items';
import Navbar from './Navbar';

const Routes = () => {
  const [cart, setCart] = useState([]);

  const getId = (e) => {
    var index = cart.findIndex((element) => element[0] === e);
    if (index === -1) {
      setCart((cart) => [...cart, [e, 1]]);
    } else {
      cart.find((element) => (element[0] === e ? (element[1] += 1) : false));
      setCart(cart);
    }
  };
  const removeElement = (e) => {
    let x = cart.filter((item) => item[0].id !== e);
    setCart(x);
  };

  return (
    <BrowserRouter>
      <Navbar numElements={cart.length} />
      <div id="content">
        <Switch>
          <Route path="/shopping-cart/" component={App}>
            <App />
          </Route>
          <Route path="/cart" component={Cart}>
            <Cart fromCart={removeElement} cart={cart} />
          </Route>
          <Route path="/items/:id" component={DetailInfo}>
            <DetailInfo parentData={getId} />
          </Route>
          <Route exact path="/items" component={Items}>
            <Items parentData={getId} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
