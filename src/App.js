import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('https://api.jsonbin.io/v3/b/63c594b515ab31599e382662')
      .then(response => response.json())
      .then(data => {
        setTransactions(data.record.transactions);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          
          <th>ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
         
        </tr>
      </thead>
      <tbody>
        {transactions.map((item, index) => (
          
          <tr key={item.id}>
            
            <td>{item.id}</td>
            <td>{item.date}</td>
            <td>{item.description}</td>
            <td>{item.category}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
