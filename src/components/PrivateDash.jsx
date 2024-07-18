import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'

function PrivateDash(props) {
  if(props.isLogedin){
    return  props.children;
  }
  else
  {
    return <Navigate to="/" />
  }
}

export default PrivateDash