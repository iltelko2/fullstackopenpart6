import { createSlice } from '@reduxjs/toolkit';

const initialState = { notification: 'ei viestiä' }
  
const notiSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
            // eslint-disable-next-line no-unused-vars
            notificationAction(state = initialState, action) {
                return { notification: action.payload }
            },
            // eslint-disable-next-line no-unused-vars
            deleteAction(state = initialState, action) {
                return { notification: '' }
            }
        }        
    },
  )

  export const { notificationAction, deleteAction } = notiSlice.actions
  export default notiSlice.reducer;
