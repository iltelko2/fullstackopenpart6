import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createContext, useReducer, useContext } from 'react'
import NotifContext from './NotificationContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const [notif, nDispatch] = useContext(NotifContext);


  const newMutation = useMutation({ mutationFn: (nw) => axios.post('http://localhost:3001/anecdotes', nw).then(res => res.data), 
  onSuccess: (succ) => {
    queryClient.invalidateQueries({ queryKey: ['anecdotes'] });

    nDispatch({type:'ADD', payload: 'You added ' + succ.content });
    setTimeout(() => {  nDispatch({type:'EMPTY'}); }, 5000)

  },
  onError: (err, ...rest) => {
    console.log(err.response.data.error)

    nDispatch({type:'ADD', payload: err.response.data.error });
    setTimeout(() => {  nDispatch({type:'EMPTY'}); }, 5000)

  }


},)


  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value

    newMutation.mutate({content, votes:0})

    event.target.anecdote.value = ''
    console.log('new anecdote')
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
