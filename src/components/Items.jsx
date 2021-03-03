import React, { useEffect, useState } from 'react';
import Data from '../data';
import * as Icons from 'react-icons/gi';
import Item from '../components/Item';

const Items = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(Data);
  }, []);

  console.log(items);

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
      />
    );
  });

  return <div className="Items">{all}</div>;
};

export default Items;
