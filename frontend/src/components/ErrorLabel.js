import React from 'react'

 const ErrorLabel=(props)=> {
    return (
        <span className='text-danger'>
        {props.message}
      </span>
  
    )
}

export default ErrorLabel
