// @flow

import React from 'react'
import type { Link } from '../types'
import styled from 'styled-components'
import { PageContainer } from '../components/shared'

const ItemList = ({
  links,
  header
}: {
  links: Array<Link>,
  header: React$Element<any>
}) => (
  <PageContainer>
    <p>{header}</p>

    {links.map((link: Link, i: number) => (
      <ItemLink key={i} href={link.url} target="_blank">
        {link.title}
      </ItemLink>
    ))}
  </PageContainer>
)

const ItemLink = styled.a`
  display: block;
  margin-bottom: 1em;
`

export default ItemList
