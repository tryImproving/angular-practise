import React, { useState, useEffect } from 'react';
import App from './App';
import Data from './data.json';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
//import ProductList from './ProductList';
import Details from './Details';

function ProductList() {
  const [product, setProduct] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [selectProduct, setSelectProduct] = useState(false);
  const previewClick = (data) => {
    if (showPreview == true) 
      setShowPreview(false);
    else 
      setShowPreview(true);
    console.log("Clicked preview:", data);
    setProduct(data);
    //useState(data)
    console.log("Product state:", product);
  }
  const detailsClick = (data) => {

  }
  const selectClick = (data) => {
    if (selectProduct == true) {
      setSelectProduct(false);      
    }
    else {
      setSelectProduct(true);
      
    }
    console.log("Clicked preview:", data);
  }

  return (
    <div className="ProductList">
      
      
      {Data.products && Data.products.map(data => (
        <div key={data.code}>
          <strong>{data.name}</strong>
          {data.images && data.images.map(image => (
            <div key = {image.url ? image.url : data.variantOptions.mainImage.url} >
              <img src={image.url} alt={data.name} />
            </div>
          ))}
          <button onClick={() => previewClick(data)} id="previewButton">Preview</button>
          {/* <Link to="/Details"> */}
            <button onClick={() => detailsClick(data)} id="detailsButton">Details</button>
          {/* </Link> */}
          <button onClick={() => selectClick(data)} id="selectButton">Select</button>
          {showPreview && product && product.code==data.code && (
            <div>
                <p>{"Product Code: "+product.code+" "}</p><br/>
                <p>{product.price ? "Price: "+product.price.formattedValue : "Price Not Provided"}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
