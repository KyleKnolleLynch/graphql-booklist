import { useQuery } from '@apollo/client'
import { GET_BOOKS } from '../queries/queries'


const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  return (
    <div>
      <ul className='book-list'>
        {data.books.map(book => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
