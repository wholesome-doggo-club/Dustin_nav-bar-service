import React from 'react';
import DepartmentItem from './departmentItem';
import Categories from './categories';
import style from './departments.css';

const Departments = (props) => (
  <div>
    <div className={style.center}>
    {props.departments.map((department, index) => 
      <DepartmentItem 
        key={index}
        index={index} 
        department={department}
        hover={props.hover}
        handleMouseOver={props.handleMouseOver}
        handleMouseOut={props.handleMouseOut} />)}

    </div>
    <div className={style.categoryCenter}>
      {props.hover ? props.categories.map((category, index) => <Categories key={index} category={category} />) : ''}
    </div>

  </div>
)

export default Departments;