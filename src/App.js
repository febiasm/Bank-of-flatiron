  import React, { useState, useEffect } from 'react';
  import './index.css';

  

  function App() {
    const [transactions, setTransactions] = useState([]);
    const [newTransaction, setNewTransaction] = useState({
      id:'',
      date: '',
      description: '',
      category: '',
      amount: ''
    });
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredTransactions, setFilteredTransactions] = useState([]);

    useEffect(() => {
      fetch('https://api.jsonbin.io/v3/b/63c594b515ab31599e382662')
        .then(response => response.json())
        .then(data => {
          setTransactions(data.record.transactions);
        });
    }, []);
    


    useEffect(() => {
      setFilteredTransactions(
        transactions.filter(transaction => 
          transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, [searchTerm, transactions]);

    const handleSubmit = (event) => {
      event.preventDefault();
      const newTransactions = [...transactions, newTransaction];
      setTransactions(newTransactions);
    }

    const handleChange = (event) => {
      setNewTransaction({
        ...newTransaction,
        [event.target.name]: event.target.value
      });
    }
    
    const handleSearch = event => {
      setSearchTerm(event.target.value);
    }

    return (
     
     
     <div>
        <h1 className='logo'> FEBIAS TRANSACTIONS </h1>

  <form onSubmit={handleSubmit}>
        <label>
            ID:
            <input type="number" name="id" value={newTransaction.id} onChange={handleChange} />
          </label>
          <label>
            Date:
            <input type="date" name="date" value={newTransaction.date} onChange={handleChange} />
          </label>
          <br />
          <label>
            Description:
            <input type="text" name="description" value={newTransaction.description} onChange={handleChange} />
          </label>
          <br />
          <label>
            Category:
            <input type="text" name="category" value={newTransaction.category} onChange={handleChange} />
          </label>
          <br />
          <label>
            Amount:
            <input type="number" name="amount" value={newTransaction.amount} onChange={handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <form>
          <label >
            Search:
            <input type="text"placeholder='Search' className='search' value={searchTerm} onChange={handleSearch} />
          </label>
        </form>
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
            {filteredTransactions.map((item, index) => (
              <tr key={item.id}>
                <td className="my-td">{item.id}</td>
                <td className="my-td">{item.date}</td>
                <td className="my-td">{item.description}</td>
                <td className="my-td">{item.category}</td>
                <td className="my-td">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  export default App;