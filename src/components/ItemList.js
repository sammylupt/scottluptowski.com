// @flow

import React, { Component } from 'react'
import type { Link } from '../types'
import s from 'styled-components'

class ItemList extends Component {

  props: {
    links: Array<Link>
  }

  render() {
    const { links } = this.props

    return (
      <div>
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

const ItemLink = s.a`
  display: block;
  margin-bottom: 1em;
`

export default ItemList
