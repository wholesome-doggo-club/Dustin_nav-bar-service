import React from 'react';
// import styles from '../stylesheet.css'

const Departments = (props) => (
  <div>
    {props.departments.map((department, index) => <DepartmentItem key={index} department={department}/>)}
  </div>
)

const DepartmentItem = (props) => (
  <div>
    {props.department.name}
  </div>

)

export default Departments;