import { useSelector, useDispatch } from 'react-redux'
import { createVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        if (state.filter.filterText === '') {
            return state.anecdotes;
        }

        return state.anecdotes.filter(a => a.content.includes(state.filter.filterText));
    })
    const dispatch = useDispatch()
  
    const vote = (id) => {
      dispatch(createVote(id))
    }

    return <><h2>Anecdotes</h2>
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
    )}</>
}

export default AnecdoteList;
