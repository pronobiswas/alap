// AuthSlice
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: "hello",
}

export const AuthSlice = createSlice({
  
  name: 'auth',
  initialState,
  reducers: {
    loggedInUser: (state, action) => {
        state.value = action.payload
      },
  },
});   

// Action creators are generated for each case reducer function
export const { loggedInUser } = AuthSlice.actions

export default AuthSlice.reducer