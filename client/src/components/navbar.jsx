import React from 'react';
import axios from 'axios';
import Departments from './Departments'

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      departments: [],
      categories: [],
      subcategories: [],
      hover: false
    }

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.retrieveData = this.retrieveData.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.retrieveData();
  }

  handleMouseOver(idx) {
    this.setState({ hover: true }, () => console.log('moused in', this.state.hover, 'idx:', idx))

    this.getCategories(idx);
  }

  handleMouseOut() {
    this.setState({ hover: false }, () => console.log('moused out', this.state.hover))
  }

  retrieveData() {
    axios
      .get('/api/navbar')
      .then(({ data }) => this.setState({ departments: data }, () => console.log(this.state.departments)))
      .catch(err => console.log(err))
  }

  getCategories(idx) {
    this.setState({ categories: this.state.departments[idx].categories }, () => console.log('categories get', this.state.categories))
    // axios
    //   .get(`/api/navbar/${_id}`)
    //   .then(({ data }) => this.setState({ categories: data }, () => console.log(this.setState.departments)))
    //   .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Departments 
          departments={this.state.departments}
          categories={this.state.categories}
          hover={this.state.hover} 
          handleMouseOver={this.handleMouseOver}
          handleMouseOut={this.handleMouseOut} />
      </div>
    )
  }
}

export default Navbar;