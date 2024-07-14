import NotifContext from './NotificationContext'
import { createContext, useReducer, useContext } from 'react'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  const [notif, nDispatch] = useContext(NotifContext);

  if (notif === '') return null

  return <div style={style}>{notif}</div>

}

export default Notification
