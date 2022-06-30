import React, { useEffect, useState } from 'react';
import './App.css';
import {getOrders, postOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

const App = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    getOrders()
      .then(data => setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
  }, [])

  const addOrder = (newOrder) => {
    postOrders(newOrder)
    .then(data => setOrders([...orders, data]))
  }

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addOrder={addOrder}/>
      </header>

      <Orders orders={orders}/>
    </main>
  );
}


export default App;
