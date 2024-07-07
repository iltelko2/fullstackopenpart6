import { useSelector, useDispatch } from 'react-redux'
import { voteAction } from '../reducers/anecdoteReducer'
import { notificationAction, deleteAction } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        if (state.filter.filterText === '') {
            return state.anecdotes;
        }

        return state.anecdotes.filter(a => a.content.includes(state.filter.filterText));
    })
    const dispatch = useDispatch()
  
    const vote = (anecdote) => {
      dispatch(voteAction(anecdote.id))

      dispatch(notificationAction('You voted ' + anecdote.content));
      setTimeout(() => dispatch(deleteAction('')), 5000)
    }

    return <><h2>Anecdotes</h2>
    {anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>
    )}</>
}

export default AnecdoteList;
