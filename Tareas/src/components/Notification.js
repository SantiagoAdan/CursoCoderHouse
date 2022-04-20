import '../App.css'
import { useState, createContext, useContext } from 'react'

const Notification = ({ message, severity, otherClass}) => {

    
  
    if(message === '') {
        return null
    }

    const config = true ?
    {
        className: "notificationStyle" `${severity === 'success' ? 'Success' : 'Error'} ${otherClass || ''}`
    } : {}

    return(
      <div {...config}>
        {message}
      </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')
    const [otherClass, setOtherClass] = useState()

    const setNotification = (sev, msg, cls) => {
        setMessage(msg)
        setSeverity(sev)
        setOtherClass(cls)
        setTimeout(() => {
            setMessage('')
        }, 2000)
    }

    return (
        <NotificationContext.Provider value={{setNotification}}>
            <Notification message={message} severity={severity} otherClass={otherClass}/>
            {children}
        </NotificationContext.Provider>
    )

}

export const useNotification = () => {
    return useContext(NotificationContext)
}

