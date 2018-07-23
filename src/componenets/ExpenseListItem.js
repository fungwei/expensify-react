import React from 'react';
import { Link } from 'react-router-dom';

export default ({ id, description, amount, createdAt}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>Amount: {amount}</p>
    <p>Created At: {createdAt}</p>
    
  </div>
);