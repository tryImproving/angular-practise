//import React from 'react';
// import React, { useState, useEffect } from 'react';
import Data from './data.json';

export default function ProductList()
{
  return(
    <div className = "ProductList">
      {
        Data.products && Data.products.map(data =>{
          return(
            <div className = "box" key = {data.code}>
              <strong>{data.name}</strong>
              {
                data.images && data.images.map(image => {
                  return(
                    <div key = {data.code}>
                      <img src={image.url} alt={data.name} />
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  );
}


