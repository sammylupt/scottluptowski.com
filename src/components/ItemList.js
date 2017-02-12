// @flow

import React, { Component } from 'react'
import type { Link } from '../types'
import s from 'styled-components'

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

        {
          links.map((link: Link, i: number) => {
            return (
              <ItemLink
                key={i}
                href={link.url}
                target="_blank"
              >
                {link.title}
              </ItemLink>
            )
          })
        }
      </div>
    )
  }
}

const HeaderWrapper = s.div`
  margin-bottom: 1em;
`

const ItemLink = s.a`
  display: block;
  margin-bottom: 1em;
`

export default ItemList