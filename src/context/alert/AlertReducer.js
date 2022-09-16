//define reducer function
//modify state based on condition
const alertReducer = (state,action) =>{

  switch(action.type){
    case 'SET_ALERT':
      return action.payload
    case 'REMOVE_ALERT':
      return null
    default:
      return state
  }
}

export default alertReducer
