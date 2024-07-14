import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { createContext, useReducer, useContext } from 'react'
import NotifContext from './components/NotificationContext'

const App = () => {
  const queryClient = useQueryClient()

  const [notif, nDispatch] = useContext(NotifContext);

  const newMutation = useMutation({ mutationFn: (nw) => axios.put('http://localhost:3001/anecdotes/' + nw.id, nw).then(res => res.data), 
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
  },},)

  const handleVote = (anecdote) => {
    console.log('vote')

    newMutation.mutate({...anecdote, votes: anecdote.votes+1})

    nDispatch({type:'ADD', payload: 'You voted on ' + anecdote.content });
    setTimeout(() => {  nDispatch({type:'EMPTY'}); }, 5000)
  }

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: () => axios.get('http://localhost:3001/anecdotes').then(res => res.data)
  })

  if ( result.isLoading ) {
    return <div>loading data...</div>
  }
  if ( result.isError ) {
    return <div>error in contacting anecdote server.</div>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
