import React from 'react'

export default ({ src, alt, ...others }) => (
  <img src={`${process.env.PUBLIC_URL}/img/${src}`} alt={alt} {...others} />
)
