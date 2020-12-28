import { useQuery } from '@apollo/client'
import { GET_BOOK } from '../queries/queries'

const BookDetails = ({ bookId }) => {
  const { loading, error, data } = useQuery(GET_BOOK, { variables: { id: bookId } })

  if (loading) { return 'Loading...' }
  if (error) { return `Error! ${error.message}` }

  console.log(data)

  const displayBookDetails = () => {
    const { book } = data

    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className='other-books'>
            {book.author.books.map(b => (
              <li key={b.id}>{b.name}</li>
            ))}
          </ul>
        </div>
      )
    } else {
      return (
        <div>No book selected...</div>
      )
    }
  }

  return (
    <div className='book-details'>
      {displayBookDetails()}
    </div>
  )
}

export default BookDetails
