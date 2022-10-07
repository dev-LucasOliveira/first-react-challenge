import { useState, useEffect } from "react";
import './App.css';
import Product from './Product';

function App() {
  const [apiProducts, setApiProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(jsonRes => setApiProducts(jsonRes.products))
  }, []);


  let priceArray = [];

  apiProducts.forEach(product => {
    const productPrice = product.price;
    
    priceArray.push(productPrice);
    
  });

  const sumValue = priceArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 0);

  console.log(priceArray);
  console.log(sumValue);
  

  return (
    <div className="App">
      <div id="products-div">

        <p><b>Produtos com preço menor que $20:</b></p>
        {apiProducts ? apiProducts.filter((product) => product.price < 20).map((product) => (
          <Product productData={product}/>
        )) : null}<br></br>

        <p><b>Produtos com avaliação acima de 4.5:</b></p>
        {apiProducts ? apiProducts.filter((product) => product.rating > 4.5).map((product) => (
          <Product productData={product}/>
        )) : null}<br></br>

        <p><b>Produtos com preço entre 500 e 700 dolares:</b></p>
        {apiProducts ? apiProducts.filter((product) => 500 < product.price < 700).map((product) => (
          <Product productData={product}/>
        )) : null}<br></br>

        <p><b>Produto de Id 13:</b></p>
        {apiProducts ? apiProducts.filter((product) => product.id === 13).map((product) => (
          <Product productData={product}/>
        )) : null}<br></br>

        <p><b>Produtos ordenados pelo preço do menor para o maior:</b></p>
        {apiProducts ? apiProducts.sort((a, b) => a.price - b.price).map((product) => (
          <Product productData={product}/>
        )) : null}<br></br>

        <p><b>Produtos ordenados pela avaliação do maior para o menor:</b></p>
        {apiProducts ? apiProducts.sort((a, b) => b.rating - a.rating).map((product) => (
          <Product productData={product}/>
        )) : null}<br></br>

        <p><b>Valor total da soma de todos os preços contidos no sistema:</b></p>
        <p>${sumValue}.00</p><br></br>

        <p><b>Valor do preço médio de todos os preços contidos no sistema:</b></p>
        <p>${sumValue/apiProducts.length}.00</p><br></br>

      </div>
    </div>
  );
}

export default App;


