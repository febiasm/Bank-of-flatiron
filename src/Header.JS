import React from "react"

//functional component to return the table headers 
function Header (){
  return(
    <thead>
      <tr>
        <th>ID</th>
        <th>Date</th>
        <th>Description</th>
        <th>Category</th>
        <th>Amount</th>
      </tr>
    </thead>
  )
}

export default Header
