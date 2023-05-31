// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ProductList from './ProductList';
import Details from './Details';

export default function App(){
  return (
    <div className="App">
      <ProductList/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/details" element={<Details/>}/>
        </Routes>
      </BrowserRouter> */}

    </div>
  );
}


