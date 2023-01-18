import { useState, useEffect } from 'react';

// custom hook to handle the search functionality
export const useSearch = (transactions) => {
  // useState hook to keep track of the search term
  const [searchTerm, setSearchTerm] = useState('');
  // useState hook to keep track of the filtered transactions
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  // useEffect hook to filter the transactions based on the search term
  useEffect(() => {
    setFilteredTransactions(
      transactions.filter(transaction => 
        // filter the transactions based on the description and search term
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, transactions]);

  // function to handle the change of the search input
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  // return the search term, handleSearch function, and filtered transactions
  return { searchTerm, handleSearch, filteredTransactions }
}
