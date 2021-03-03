import { Link } from 'react-router-dom';

const Item = (props) => {
  console.log(props);
  const getId = (e) => {
    console.log(e.target.id);
  };
  // if class name then disable link
  return (
    <div className={props.className}>
      <div className="firstRow">
        {props.className === 'allItems' ? (
          <Link to={`items/${props.id}`} className="name">
            <h3>{props.name}</h3>
          </Link>
        ) : (
          <h3>{props.name}</h3>
        )}
        <h3 className="price">{props.price}€</h3>
      </div>
      <div className="secondRow">
        <div className="image">{props.img}</div>

        {props.className !== 'allItems' ? (
          <p className="description">{props.description}</p>
        ) : (
          <p></p>
        )}
      </div>

      <div className="addToCart">
        <button id={props.id} onClick={getId}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
