import Data from '../data';
import React from 'react';
import * as Icons from 'react-icons/gi';
import Item from '../components/Item';

const DetailInfo = (props) => {
  var path = window.location.pathname.split('/');
  var item = path[2];

  var rightOne = Data.find((i) => i.id === item);
  var fi = rightOne.image;
  var icon = React.createElement(Icons[fi]);

  const getId = (e) => {
    //console.log('tukaj');
    var sendItem = Data.find((item) => item.id === e);
    //console.log(sendItem);
    props.parentData(sendItem);
  };

  return (
    <Item
      key={rightOne.id}
      name={rightOne.item}
      img={icon}
      id={rightOne.id}
      description={rightOne.description}
      price={rightOne.price}
      className="detailInfo"
      childData={getId}
    />
  );
};

export default DetailInfo;
