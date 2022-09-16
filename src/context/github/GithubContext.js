import {createContext, useReducer} from 'react';
import githubReducer from './GithubReducer';

//define a context
const GithubContext = createContext()


//define a context provider
//export context provider
export const GithubProvider = ({children}) =>{

  //define the initial state
  const initialState = {
    users: [],
    user:{},
    repos:[],
    loading: false
  }

  //useReducer hook
  //it takes two inputs , the reducer function and the initial state
  //the state variable will store the global state value returned from reducer function
  //dispatch is the function which will be used to update global state value
  const [state,dispatch] = useReducer(githubReducer, initialState)



  return <GithubContext.Provider value={{
    ...state,
    dispatch

  }}>
    {children}
  </GithubContext.Provider>
}

//export context
export default GithubContext
