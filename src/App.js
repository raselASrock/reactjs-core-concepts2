import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Laptop', price: '47,000', brand: 'Lenovo'},
    {name: 'Phone', price: '7,000', brand: 'Realme'},
    {name: 'Tablet', price: '17,000', brand: 'Samsung'},
    {name: 'Watch', price: '3,000', brand: 'GoPro'}
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name = {product.name} price = {product.price} brand = {product.brand}></Product>)
      }
      {/* <Product name ="Laptop" price = "47,000" brand = 'Lenovo'></Product>
      <Product name ="Phone" price = "75,000" brand = 'Realme'></Product>
      <Product name ="Watch" price = "3,500" brand = 'GoPro'></Product> */}
    </div>
  );
}

function Product(props){
  return(
    <div className='product'>
      <h3>Name:{props.name}</h3>
      <p>Price:{props.price}</p>
      <p>Brand:{props.brand}</p>
    </div>
  )
}

export default App;
