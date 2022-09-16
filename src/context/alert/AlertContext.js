import {createContext, useReducer} from 'react'
import alertReducer from './AlertReducer'

//define context
const AlertContext = createContext()

//define context provider
//export context provider
export const AlertProvider = ({children}) =>{

  const initialState = null;

  //useReducer hook
  //it takes two inputs , the reducer function and initial state
  //it gives two outputs
  //the variable to store state
  //the function to modify state based on action performed
  const [state,dispatch] = useReducer(alertReducer,initialState)

  //set an alert
  const setAlert = (msg,type) =>{
    dispatch({
      type: 'SET_ALERT',
      payload:{
        msg,
        type
      }
    })

    setTimeout(() => dispatch({
      type: 'REMOVE_ALERT'
    }),3000)
  }
  return <AlertContext.Provider value={{
    alert: state,
    setAlert
  }}>
    {children}
  </AlertContext.Provider>

}

//export context
export default AlertContext;
