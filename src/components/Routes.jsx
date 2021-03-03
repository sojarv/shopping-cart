import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Cart from './Cart';
import DetailInfo from './DetailInfo';
import Items from './Items';
import Navbar from './Navbar';
const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={App}>
          <App />
        </Route>
        <Route path="/cart" component={Cart}>
          <Cart />
        </Route>
        <Route path="/items/:id" component={DetailInfo}>
          <DetailInfo />
        </Route>
        <Route exact path="/items" component={Items}>
          <Items />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
