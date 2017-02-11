import React, { Component } from 'react'
import s from 'styled-components'

import { Link } from 'react-router'

class Menu extends Component {

  render() {
    return (
      <MenuHeader>
        <MainLink to="/">Scott Luptowski</MainLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </MenuHeader>
    )
  }
}

export default Menu

const MenuHeader = s.header`
  padding-top: 1em;
  padding-bottom: .5em;
  margin-bottom: 1em;
  border-bottom: 1px dashed black;
  text-align: center;
`

const BaseLink = s(Link)`
  color: black;
  text-transform: uppercase;
  text-decoration: none;

  &:visited {
    color: black
  }
`

const MainLink = s(BaseLink)`
  font-size: 30px;
  margin: 0 auto 0.1em;
  display: block;
`

const NavLink = s(BaseLink)`
  margin-right: 1em;
  padding: .25em;

  &:hover {
    text-decoration: underline;
  }

  &:last-of-type {
    margin-right: 0;
  }
`