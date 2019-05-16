import React from 'react';
import axios from 'axios';
import Departments from './Departments'

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      departments: []
      
    }

    this.retrieveData = this.retrieveData.bind(this);
  }

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData() {
    axios
      .get('/api/navbar')
      .then(({ data }) => this.setState({ departments: data }, () => console.log(this.state.departments)))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Departments departments={this.state.departments}/>
      </div>
    )
  }
}

export default Navbar;