import { useQuery } from '@apollo/client'
import { GET_BOOK } from '../queries/queries'

const BookDetails = () => {
  const { loading, error, data } = useQuery(GET_BOOK)

  if (loading) { return 'Loading...' }
  if (error) { return `Error! ${error.message}` }

  console.log(data)

  return (
    <div className='book-details'>
      <p>Output book details here...</p>
    </div>
  )
}

export default BookDetails
