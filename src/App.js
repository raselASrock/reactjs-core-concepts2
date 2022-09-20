import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(33)
  const increaseCount = () =>setCount(count + 1);
  const decreaseCount = () =>setCount(count - 1);

  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount(newCount)
  // }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  // useEffect( () =>{} , [])
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [] )
  return(
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name = {user.name} email = {user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div className='user'>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}


export default App;

/* <Product name ="Laptop" price = "47,000" brand = 'Lenovo'></Product>
      <Product name ="Phone" price = "75,000" brand = 'Realme'></Product>
      <Product name ="Watch" price = "3,500" brand = 'GoPro'></Product> */

/* 
const products = [
    {name: 'Laptop', price: '47,000', brand: 'Lenovo'},
    {name: 'Phone', price: '7,000', brand: 'Realme'},
    {name: 'Tablet', price: '17,000', brand: 'Samsung'},
    {name: 'Watch', price: '3,000', brand: 'GoPro'}
  ]
*/

/* 
{
  products.map(product => <Product name = {product.name} price = {product.price} brand = {product.brand}></Product>)
}
<div className='product'>
      <h3>Name:{props.name}</h3>
      <p>Price:{props.price}</p>
      <p>Brand:{props.brand}</p>
</div>
*/

/* 
<h3>Name:{props.name}</h3>
      <p>Price:{props.price}</p>
      <p>Brand:{props.brand}</p>
*/
