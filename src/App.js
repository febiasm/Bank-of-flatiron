import React, { useState } from 'react';
import './index.css';
import { useFetchTransactions } from './fetch';
import { useSearch } from './search';
import { Labels } from './labels';

function App() {
  // useState hook to update and keep track of the updated transactions
  const [updatedTransactions, setUpdatedTransactions] = useState([]);

  // useFetchTransactions hook to fetch the transactions and store them in the transactions variable
  const transactions = useFetchTransactions(updatedTransactions);

  // useSearch hook to handle the search functionality and filtered transactions
  const { searchTerm, handleSearch, filteredTransactions } = useSearch(transactions);

  // useState hook to keep track of the new transaction being added
  const [newTransaction, setNewTransaction] = useState({
    id: '',
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  // function to handle the form submission of the new transaction
  const handleSubmit = (event) => {
    event.preventDefault();
    // create a new array with the new transaction and update the state of the updated transactions
    const newTransactions = [...transactions, newTransaction];
    setUpdatedTransactions(newTransactions);
  }

  // function to handle the input changes of the new transaction
  const handleChange = (event) => {
    setNewTransaction({
      ...newTransaction,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div>
      <h1 className='logo'> FEBIAS TRANSACTIONS </h1>
      <form onSubmit={handleSubmit}>
        <Labels newTransaction={newTransaction} handleChange={handleChange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <form>
        <label >
          Search:
          <input type="text" placeholder='Search' className='search' value={searchTerm} onChange={handleSearch} />
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
