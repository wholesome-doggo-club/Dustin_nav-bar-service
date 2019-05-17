import React from 'react';

const DepartmentItem = (props) => (
  <span onMouseOver={() => props.handleMouseOver(props.index)}>
    {props.department.name}
    
  </span>
)

export default DepartmentItem;