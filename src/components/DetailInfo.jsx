import Data from '../data';
import React from 'react';
import * as Icons from 'react-icons/gi';
import Item from '../components/Item';

const DetailInfo = () => {
  var path = window.location.pathname.split('/');
  var item = path[2];
  console.log(item);

  var rightOne = Data.find((i) => i.id === item);
  console.log(rightOne);
  var fi = rightOne.image;
  var icon = React.createElement(Icons[fi]);

  return (
    <Item
      key={rightOne.id}
      name={rightOne.item}
      img={icon}
      id={rightOne.id}
      description={rightOne.description}
      price={rightOne.price}
      className="detailInfo"
    />
  );
};

export default DetailInfo;
