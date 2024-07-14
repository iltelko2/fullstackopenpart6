import { useDispatch } from 'react-redux'
import { addNew } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const submit = async (ev) => {
        ev.preventDefault();

        dispatch(addNew(ev.target.text.value));

        dispatch(setNotification('You added ' + ev.target.text.value, 5));
    }
    return (<>
        <h2>create new</h2>
        <form onSubmit={submit}>
          <div><input name="text" /></div>
          <button>create</button>
        </form></>);
}

export default AnecdoteForm;
