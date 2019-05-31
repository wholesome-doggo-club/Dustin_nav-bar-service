import React from 'react';
import style from './SearchResults.css';

const SearchResults = (props) => (
  <li>
    <span className={style.result} onMouseEnter={() => props.handleMouseOver('resultHoverIdx', props.index)}>
      {props.result.name}
    </span>
  </li>
)

export default SearchResults;