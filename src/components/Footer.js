// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import type { Link } from '../types'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

fontawesome.library.add(brands)
const currentYear = new Date().getFullYear()

const Footer = ({ links }: { links: Array<Link> }) => (
  <Container>
    <FooterText>© {currentYear} Scott Luptowski</FooterText>
    <p>
      {links.map(link => (
        <ContactLink key={link.title} href={link.url} target="_blank" alt={link.title}>
          <FontAwesomeIcon icon={['fab', link.title.toLowerCase()]} />
        </ContactLink>
      ))}
    </p>
  </Container>
)

export default Footer

const Container = styled.footer`
  text-align: center;
  margin: 2em auto 1em;
  padding-bottom: 0.5em;
`

const FooterText = styled.p`
  font-size: 0.85em;
  margin-bottom: 0.5em;
`

const ContactLink = styled.a`
  padding-right: 15px;
  color: #222222 !important;
  font-size: 18px;
  opacity: 0.8;

  &:hover {
    color: #111111;
    opacity: 1;
    transition: 0.2s ease-in-out;
    outline: none;
  }

  &:last-of-type {
    padding-right: 0;
  }
`
