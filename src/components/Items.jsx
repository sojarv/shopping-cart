import React, { useEffect, useState } from 'react';
import Data from '../data';
import * as Icons from 'react-icons/gi';
import Item from '../components/Item';

const Items = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(Data);
  }, []);

  //console.log(items);

  const getId = (e) => {
    var sendItem = Data.find((item) => item.id === e);
    props.parentData(sendItem);
  };

  const all = items.map((item) => {
    var fi = item.image;
    var icon = React.createElement(Icons[fi]);
    //console.log(icon);
    return (
      <Item
        key={item.id}
        name={item.item}
        img={icon}
        id={item.id}
        description={item.description}
        price={item.price}
        className="allItems"
        // onChange={getId}
      />
    );
  });

  return (
    <div className="Items">
      {items.map((item) => {
        var fi = item.image;
        var icon = React.createElement(Icons[fi]);
        //console.log(icon);
        return (
          <Item
            key={item.id}
            name={item.item}
            img={icon}
            id={item.id}
            description={item.description}
            price={item.price}
            className="allItems"
            childData={getId}
          />
        );
      })}
    </div>
  );
};

export default Items;
