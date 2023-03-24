import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
  const { name } = props;

  return (
    <nav>
      <h1>navbar component {name}</h1>
    </nav>
  );
};

export default Navbar;