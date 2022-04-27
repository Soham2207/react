import logo from './logo.svg';
import './App.css';
import logo1 from './download.jfif';
import {useState} from 'react';

  
function Item1(prop)
{
  
  return(
<div>
        <img src={prop.img}></img>
        <h2>{prop.label}</h2>
        <h2>{prop.price}$</h2>
        <button >Add to Cart</button>
        </div>
  );
}
function App() {
  const [count,setcount]=useState(0)
  const [bill,setbill]=useState(0)
function shop()
{
  setcount(count+1)
  setbill(bill+500)
}
  return (
    <div className="App">
      <table>
        <tr>
          <td><Item1 img={logo} label="React" price="200"/></td>
          <td><Item1 img={logo1} label="Bottle" price="500"/></td>
          <td><Item1 img={logo1} label="Shoes" price="500"/></td>
          <td><Item1 img={logo1} label="Toys" price="100"/></td>
        </tr>
       
      </table>
      <button onClick={shop}> Submit</button>
<h2>No of Items Perchased:{count}</h2>
<h2>Total Bill:{bill}</h2>
    </div>
  );
}

export default App;
