import { createSlice } from '@reduxjs/toolkit';

const initialState = { filterText: '' }
  
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
            // eslint-disable-next-line no-unused-vars
            filterAction(state = initialState, action) {
                return { filterText: action.payload }
            }
        }        
    },
  )

  export const { filterAction } = filterSlice.actions
  export default filterSlice.reducer;
