/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react'

const notifReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
        return action.payload
    case "EMPTY":
        return ''
    default:
        return state
  }
}

const NotifContext = createContext()

export const NotifContextProvider = (props) => {
  const [notif, nDispatch] = useReducer(notifReducer, '')

  return (
    <NotifContext.Provider value={[notif, nDispatch]}>
      {props.children}
    </NotifContext.Provider>
  )
}

export default NotifContext