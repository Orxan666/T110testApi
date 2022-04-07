import React, { useEffect, useState } from "react";
import "./productList.scss";
import { Link } from "react-router-dom";
const HeroSlider = ({data,loading}) => {

  return (
    <div>
      <div className="container">
        <div className="row">
          {data.map((pro) => (
            <div className="col-lg-3" key={pro.id}>
              <div className="productList">
                <img width={150} height={150} src={pro.image} alt="" />

                <h4>
                  <Link to={`/products/${pro.id}`}>
                  {pro.title}
                  </Link>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
