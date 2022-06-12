import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproductsApi } from "../store/product/product.actions";

const Home = () => {
  const dispatch = useDispatch();
  const { data, products } = useSelector((state) => state.products);

  // localStorage, check if data
  useEffect(() => {
    if (data.length === 0) {
      dispatch(getproductsApi());
    }
  });
let cart=[];
const addtocart=(id)=>{

  cart.push()
}
  return (
    <div>
      <h1>Home</h1>
      <br />
      {products.loading && <div>Loading...</div>}
      {products.error && <div>Error...</div>}
      {!products.loading &&
        data.map((product) => (
          <div
            key={product.id}
            style={{
              display:"grid",
              gridTemplate:"1fr 1fr",
             
              maxWidth: "400px",
            }}
          >
            <div><h2>{product.name}</h2></div>
            <div>{product.description}</div> 
           
            
            <div><button onClick={addtocart}>Add to Cart</button></div>
          </div>
        ))}
    </div>
  );
};

export default Home;
