//import React from 'react'
import React, { useState, useEffect } from 'react';
import Data from '../tryReact/angular-practise/task-demo/src/data.json';


export default function ProductList() {
    // const [data, setData] = useState({});
    const [stateData, setStateData] = useState({});

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
        // setStateData(Data);
    }, []);
  
    return (
      <div>
        {stateData.products && stateData.products.map(product => (
          <div key={product.code}> 
            {/* console.log({key}); */}
            <h1>{product.name}</h1>
            <img src={product.images.url} alt={product.name} />
          </div>
        ))}
      </div>
    );
}





