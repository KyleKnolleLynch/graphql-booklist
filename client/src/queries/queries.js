import { gql } from '@apollo/client'

const GET_BOOKS = gql`
  query GET_BOOKS {
    books {
      name
      id
    }
  }
`

const GET_AUTHORS = gql`
  query GET_AUTHORS {
    authors {
      name
      id
    }
  }
`

export { GET_BOOKS, GET_AUTHORS }
