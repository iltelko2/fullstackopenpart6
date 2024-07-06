const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const createVote = (id) => {
  return { type: 'VOTE', id };
}

const addAnecdote = (text) => {
  return { type: 'ADD', text}
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD':
      return [...state, {
        content: action.text,
        id: getId(),
        votes: 0
      }].sort((a, b) => b.votes - a.votes);
    case 'VOTE':
      return state.map((o) => { if (o.id !== action.id) {
        return o;
      } else return {
        content: o.content,
        id: o.id,
        votes: o.votes + 1
      };
    }).sort((a, b) => b.votes - a.votes);
    case 'ZERO':
      return state.map((o) => { return {
          content: o.content,
          id: o.id,
          votes: 0
        };
      });
    default:
      return state;
  }
}

export { reducer, createVote, addAnecdote }