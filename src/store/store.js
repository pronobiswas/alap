import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from '../feature/AuthSlice'
import activeMsgSlice from '../feature/activeMsgSlice'

export const store = configureStore({
  reducer: {
    loggedinUderData : AuthSlice,
    activeChatUser: activeMsgSlice ,
  },
})
