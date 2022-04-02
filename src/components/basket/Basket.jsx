import React from "react";
import '../../css/basket.scss'
import {GrBasket} from 'react-icons/gr'

const Basket = () => {
  return (
    <div>
      <div className="basket">
        <GrBasket className="grIcon" />
      </div>
    </div>
  );
};

export default Basket;
