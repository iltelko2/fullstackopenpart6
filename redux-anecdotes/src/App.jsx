import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import anecdotesService from './services/anecdotes'
import { useDispatch } from "react-redux"
import { useEffect } from 'react'
import { addAction } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdotesService.getAll().then(a => a.forEach(n => dispatch(addAction(n))))
  }, [])

  return (
    <div>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App