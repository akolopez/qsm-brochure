import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/process">Our Process</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    )
  }
}

export default Header;
