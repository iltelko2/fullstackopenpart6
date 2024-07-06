import { useSelector, useDispatch } from 'react-redux'
import { createVote, addAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)

    dispatch(createVote(id))
  }

  const submit = (ev) => {
    ev.preventDefault();

    dispatch(addAnecdote(ev.target.text.value));
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={submit}>
        <div><input name="text" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App