import { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { GET_AUTHORS, GET_BOOKS, addBookMutation } from '../queries/queries'


const AddBook = () => {
  const [inputs, setInputs] = useState({
    name: '',
    genre: '',
    authorId: ''
  })

  const [alert, setAlert] = useState(false)

  const { loading, error, data } = useQuery(GET_AUTHORS)

  const [addBookMut] = useMutation(addBookMutation)

  if (loading) { return 'Loading...' }
  if (error) { return `Error! ${error.message}` }

  const handleInputsChange = e => {
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()



    if (!inputs.name || !inputs.genre || !inputs.authorId) {
      setAlert(true)
      return
    } else {
      setAlert(false)

      addBookMut({
        variables: {
          name: inputs.name,
          genre: inputs.genre,
          authorId: inputs.authorId
        },
        refetchQueries: [{ query: GET_BOOKS }]
      })

      setInputs({ name: '', genre: '', authorId: '' })
    }
  }

  return (
    <form id='add-book' onSubmit={handleSubmit}>

      <div className="field">
        <label htmlFor='name'>Book Name</label>
        <input type="text" name='name' value={inputs.name} onChange={handleInputsChange} />
      </div>

      <div className="field">
        <label htmlFor='genre'>Genre</label>
        <input type="text" name='genre' value={inputs.genre} onChange={handleInputsChange} />
      </div>

      <div className="field">
        <label htmlFor='author'>Author</label>
        <select name='authorId' value={inputs.authorId} onChange={handleInputsChange}>
          {loading && <option disabled>Loading Authors...</option>}
          <option>Select Author</option>
          {data.authors.map(author => (
            <option key={author.id} value={author.id}>{author.name}</option>
          ))}
        </select>
      </div>

      <button>+</button>
      {alert && <div className='alert'><h3>Please enter all form fields...</h3></div>}
    </form>
  )
}

export default AddBook
