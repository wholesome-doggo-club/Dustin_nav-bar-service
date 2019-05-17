import React from 'react';
import DepartmentItem from './departmentItem';
import Categories from './categories';
// import styles from '../stylesheet.css'

const Departments = (props) => (
  <div>
    {props.departments.map((department, index) => 
      <DepartmentItem 
        key={index}
        index={index} 
        department={department}
        hover={props.hover}
        handleMouseOver={props.handleMouseOver}
        handleMouseOut={props.handleMouseOut} />)}
        {/* get span name via e.target.name and then load that targets categories */}
        <br />
        {props.hover ? props.categories.map((category, index) => <Categories key={index} category={category} />) : ''}
  </div>
)

export default Departments;