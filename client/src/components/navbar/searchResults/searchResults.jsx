import React from 'react';
import style from './searchResults.css';

const SearchResults = (props) => (
  <li>
    <span className={style.result}>
      {props.result.name}
    </span>
  </li>
)

export default SearchResults;