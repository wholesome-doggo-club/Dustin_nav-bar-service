import React from 'react';
import Subcategories from './subcategories'
import style from './categories.css'

const Categories = (props) => (
  <span className={style.categories}>
    {props.category.name}
    <ul className={style.subcategories}>
      {props.category.subcategories.map((subcategory, index) => <Subcategories key={index} subcategory={subcategory} />)}
    </ul>  
  </span>
)

export default Categories;