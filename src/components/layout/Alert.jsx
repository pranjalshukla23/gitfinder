import {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext';

function Alert(){

  //use the context
  const {alert} = useContext(AlertContext)

  return alert !== null && (
          <div className={`alert alert-${alert.type}`}>
            <i className='fas fa-info-circle' /> {alert.msg}
          </div>
  )

}

export default Alert
