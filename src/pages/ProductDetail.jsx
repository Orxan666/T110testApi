import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductDetail = () => {
  const { id } = useParams();
  const [singlePro, setSinglePro] = useState(null);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((c) => c.json())
      .then((c) => setSinglePro(c));
  }, [id]);

  return (
    <section className="product-detail">
      <div className="container">
        {singlePro!=null?(
 <div className="row">
 <div className="col-lg-5">
   <div className="pro-img">
     <img
       className="img-fluid"
       src={singlePro.image}
       alt={singlePro.title}
     />
   </div>
 </div>
 <div className="col-lg-7">
   <div className="pro-info">
     <span>{singlePro.category}</span>
     <h2>{singlePro.title}</h2>
     <h5>{singlePro.description}</h5>
   </div>  
 </div>
</div>
        ):(
          <div className="row">
            <div className="col-lg-5">
              <Skeleton count={5}/>
            </div>
            <div className="col-lg-5">
              <Skeleton count={5}/>
            </div>
            <div className="col-lg-5">
              <Skeleton count={5}/>
            </div>
            <div className="col-lg-5">
              <Skeleton count={5}/>
            </div>
            <div className="col-lg-5">
              <Skeleton count={5}/>
            </div>
            <div className="col-lg-5">
              <Skeleton count={5}/>
            </div>
          </div>
        ) }
       
      </div>
    </section>
  );
};

export default ProductDetail;
