import { useState, useEffect } from 'react';

export const useFetchTransactions = (updatedTransactions) => {
  // useState hook to keep track of the transactions
  const [transactions, setTransactions] = useState([]);

  // useEffect hook to fetch the transactions from the API and update the state
  useEffect(() => {
    // check if there are any updated transactions, if so set the state
    if (updatedTransactions.length) {
        setTransactions(updatedTransactions);
    } else {
    // if not, fetch the transactions from the API
        fetch('https://api.jsonbin.io/v3/b/63c594b515ab31599e382662')
        .then(response => response.json())
        .then(data => {
        // update the state with the fetched transactions
        setTransactions(data.record.transactions);
        });
    }
  }, [updatedTransactions]);

  return transactions;
}
