import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  //console.log(props);
  const toRoutes = (e) => {
    props.fromCart(e);
  };
  const prices = [];
  props.cart.map((item) => prices.push(item[0].price * item[1]));
  const sum = prices.reduce((a, b) => a + b, 0);
  //console.log();
  const cart = props.cart.map((item) => (
    <CartItem
      key={item[0].id}
      id={item[0].id}
      name={item[0].item}
      quantity={item[1]}
      price={item[0].price}
      img={item[0].image}
      fromCartItem={toRoutes}
    />
  ));

  return (
    <div className="cart">
      {cart.length !== 0 ? (
        <div>
          {cart}
          <p id="sum">{sum} €</p>
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
};

export default Cart;
