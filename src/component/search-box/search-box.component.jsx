import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input 
    className='searhc'
    type='search'
    placeholder={ placeholder }
    onChange={ handleChange }
  />
)