// @flow

import styled from 'styled-components'
import { small, large } from '../utils'

const PageContainer = styled.div`
  p {
    margin-bottom: 1em;
  }

  margin: 0 auto;

  ${small`
    max-width: 80%;
  `}

  ${large`
    max-width: 500px;
  `}
`

export {
  PageContainer
}
