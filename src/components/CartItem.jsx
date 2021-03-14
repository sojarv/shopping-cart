import { Link } from 'react-router-dom';
import React from 'react';
import * as Icons from 'react-icons/gi';

const CartItem = (props) => {
  var icon = React.createElement(Icons[props.img]);

  const getId = (e) => {
    props.fromCartItem(e.target.id);
  };

  return (
    <div className="cartItem">
      <div className="itemName">
        <Link to={`items/${props.id}`}>
          <h3>{props.name}</h3>
        </Link>
      </div>
      <div className="svg">{icon}</div>
      <div className="prices">
        <div>
          {props.quantity} x {props.price} €
        </div>
        <div>{props.quantity * props.price} €</div>
        <button onClick={getId} className="remove" id={props.id}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
