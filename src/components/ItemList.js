// @flow

import React, { Component } from 'react'
import type { Link } from '../types'
import styled from 'styled-components'

class ItemList extends Component {
  props: {
    links: Array<Link>,
    header: React$Element<any>
  }

  render() {
    const { links, header } = this.props

    return (
      <div>
        <HeaderWrapper>
          {header}
        </HeaderWrapper>

        {links.map((link: Link, i: number) => (
          <ItemLink key={i} href={link.url} target="_blank">
            {link.title}
          </ItemLink>
        ))}
      </div>
    )
  }
}

const HeaderWrapper = styled.div`
  margin-bottom: 1em;
`

const ItemLink = styled.a`
  display: block;
  margin-bottom: 1em;
`

export default ItemList
