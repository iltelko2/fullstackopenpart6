import { useDispatch } from 'react-redux'
import { addNewAction } from '../reducers/anecdoteReducer'
import { notificationAction, deleteAction } from '../reducers/notificationReducer'
import anecdotesService from '../services/anecdotes';

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const submit = async (ev) => {
        ev.preventDefault();

        const newObj = await anecdotesService.createNew(ev.target.text.value);
        
        dispatch(addNewAction(newObj));

        dispatch(notificationAction('You added ' + ev.target.text.value));
        setTimeout(() => dispatch(deleteAction('')), 5000)
    }
    return (<>
        <h2>create new</h2>
        <form onSubmit={submit}>
          <div><input name="text" /></div>
          <button>create</button>
        </form></>);
}

export default AnecdoteForm;
