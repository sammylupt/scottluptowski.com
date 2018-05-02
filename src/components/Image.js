import React from 'react'

const Image = ({ src, alt, ...others }) => (
  <img src={`${process.env.PUBLIC_URL}/img/${src}`} alt={alt} {...others} />
)

export default Image
