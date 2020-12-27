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

const addBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`

const GET_BOOK = gql`
  query GET_BOOK($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books{
          name
          id
        }
      }
    }
  }
`

export { GET_BOOKS, GET_AUTHORS, addBookMutation, GET_BOOK }
