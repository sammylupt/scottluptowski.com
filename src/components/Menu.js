import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const Menu = () => (
  <MenuHeader>
    <LinksContainer>
      <NavLink to="/" bold>Scott Luptowski</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </LinksContainer>
  </MenuHeader>
)

export default Menu

const LinksContainer = styled.div`
  margin: .5em 0 .25em 0;
  font-size: 1.15em;
  position: fixed;
  z-index: 1;
`

const MenuHeader = styled.header`
  padding-top: 1em;
  padding-bottom: .5em;
  margin-bottom: 1em;
  margin-left: 1em;
`

// weird construction to avoid passing 'bold' to react router Link
const NavLink = styled(({ bold, children, ...rest }) => (
  <Link {...rest}>{children}</Link>
))`
  color: #222;
  text-decoration: none;
  margin: .25em 1em 0 .25em;
  padding-bottom: 2px;
  border-bottom: 2px solid #222;

  &:visited {
    color: #222;
  }

  &:last-of-type {
    margin-right: 0;
  }

  ${(props) => props.bold &&
    `
      font-weight: 600;
      letter-spacing: 1.2px;
    `
  }
`;

