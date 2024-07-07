import { createSlice } from '@reduxjs/toolkit';

const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
      addNewAction(state = [], action) {
        return [...state, action.payload ].sort((a, b) => b.votes - a.votes);
      },
      addAction(state = [], action) {
        return [...state, action.payload ].sort((a, b) => b.votes - a.votes);
      },
      voteAction(state = [], action) {
                return state.map((o) => { if (o.id !== action.payload) {
                  return o;
                } else return {
                  content: o.content,
                  id: o.id,
                  votes: o.votes + 1
                };
              }).sort((a, b) => b.votes - a.votes);
      }
    },      
  })

export const { addAction, voteAction, addNewAction } = anecdoteSlice.actions
export default anecdoteSlice.reducer
