import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Menu = () => (
  <MenuHeader>
    <LinksContainer>
      <NavLink to="/" bold>Scott Luptowski</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </LinksContainer>
  </MenuHeader>
)

export default Menu

const LinksContainer = styled.div`
  margin: .5em 0 .25em 0;
  font-size: 18px;
  position: fixed;
  z-index: 1;
`

const MenuHeader = styled.header`
  padding-top: 1em;
  padding-bottom: .5em;
  margin-bottom: 1em;
  margin-left: 1em;
`

const BaseLink = styled(Link)`
  color: #222;
  text-decoration: none;
  &:visited {
    color: #222;
  }
`

const MainLink = styled(BaseLink)`
  font-size: 30px;
  margin: 0 auto 0.1em;
  display: block;
  letter-spacing: 2.5px;
  text-transform: none;
  word-spacing: 5px;
`

const NavLink = styled(BaseLink)`
  margin: .25em 1em 0 .25em;
  transition: 0.2s ease-in-out;
  padding-bottom: 2px;
  border-bottom: 2px solid #222;

  &:last-of-type {
    margin-right: 0;
  }

  ${(props) => 
    props.bold &&
    `
      font-weight: 600;
      letter-spacing: 1.2px;
    `
  }
`
