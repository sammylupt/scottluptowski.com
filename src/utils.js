import { css } from 'styled-components';

const below = (size) => (...args) => css`
  @media (max-width: ${size}px) {
    ${css(...args)}
  }
`

const above = (size) => (...args) => css`
  @media (min-width: ${size}px) {
    ${css(...args)}
  }
`

const small = below(800)
const large = above(800)

export {
  below,
  above,
  small,
  large
}
