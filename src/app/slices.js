import { createSlice } from '@reduxjs/toolkit'

const initialState = {                                // initial state
  data: '',
}

export const dataSlice = createSlice({
  name: 'showData',
  initialState,
  reducers: {
    
    showData: (state, action) => {
      state.data = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { showData } = dataSlice.actions

export default dataSlice.reducer