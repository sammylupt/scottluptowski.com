import React, { Component } from 'react'
import { Link } from 'react-router'

class Menu extends Component {

  render() {
    return (
      <header>
        <div className="menu-name">
          <Link to="/">Scott Luptowski</Link>
        </div>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/posts">Posts</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </header>
    )
  }
}

export default Menu
