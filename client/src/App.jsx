import BookList from './components/BookList'
import AddBook from './components/AddBook'

const App = () => {
  return (
    <main>
      <h1>GraphQL Playlist</h1>
      <BookList />
      <AddBook />
    </main>
  )
}

export default App
