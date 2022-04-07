import React, { useEffect, useState } from "react";
import ProductList from "../components/product-list/ProductList";

const Products = () => {
  const [products, setProduct] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProductList = () => {
      fetch("https://fakestoreapi.com/products")
        .then((c) => c.json())
        .then((c) => setProduct(c));
    };
    getProductList();
  }, []);
  const submitHandle = (e) => {
      e.preventDefault()
      let productNews=products.filter(c=>c.title.includes(searchText.toLowerCase()))
      setFilteredProducts(productNews)
  };

  return (
    <section>
      <div className="container">
        <div>
          <div className="input-group input-group-lg mb-3">
            <form onSubmit={submitHandle} className="w-100">
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Search
              </span>
            </form>
          </div>

          <ProductList loading={loading}  data={filteredProducts.length>0?filteredProducts:products}/>
        </div>
      </div>
    </section>
  );
};

export default Products;
