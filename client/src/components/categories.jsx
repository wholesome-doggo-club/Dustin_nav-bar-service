import React from 'react';
import Subcategories from './subcategories'

const Categories = (props) => (
  <span>
    {props.category.name}
    <ul>
      {props.category.subcategories.map((subcategory, index) => <Subcategories key={index} subcategory={subcategory} />)}
    </ul>  
  </span>
)

export default Categories;