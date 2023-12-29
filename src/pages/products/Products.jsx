import React, { useState } from "react";
import List from "../../components/list/List";
import { useParams } from "react-router-dom";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      {/* Left */}
      <div className="left">
        {/* 1 */}
        <div className="filterItems">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" name="shoes" id="1" />
            <label htmlFor="1">Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="skirts" id="2" />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" name="trousers" id="3" />
            <label htmlFor="3">Trousers</label>
          </div>
        </div>

        {/* 2 */}
        <div className="filterItems">
          <h2>Filter Products</h2>
          <div className="inputItem">
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>

        {/* 3 */}
        <div className="filterItems">
          <h2>Sort Products</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              name="price"
              value="asc"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (lowest)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              name="price"
              value="desc"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price (highest)</label>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
