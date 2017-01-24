import React, { Component } from 'react'
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
            <ul className="pure-menu-list">
              <li className="pure-menu-item pure-menu-selected">
                <Link to="/" className="pure-menu-link">Home</Link>
              </li>
              <li className="pure-menu-item">
                <Link to="/process" className="pure-menu-link">Our Process</Link>
              </li>
              <li className="pure-menu-item">
                <Link to="/products" className="pure-menu-link">Products</Link>
              </li>
              <li className="pure-menu-item">
                <Link to="/about" className="pure-menu-link">About Us</Link>
              </li>
            </ul>
        </div>
      </div>
    )
  }
}

export default Header;
