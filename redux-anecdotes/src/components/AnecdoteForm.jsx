import { useDispatch } from 'react-redux'
import { addAction } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const submit = (ev) => {
        ev.preventDefault();
    
        dispatch(addAction(ev.target.text.value));
    }
    return (<>
        <h2>create new</h2>
        <form onSubmit={submit}>
          <div><input name="text" /></div>
          <button>create</button>
        </form></>);
}

export default AnecdoteForm;
