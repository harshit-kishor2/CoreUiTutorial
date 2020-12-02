import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="#" target="_blank" rel="noopener noreferrer">DemoProject</a>
        <span className="ml-1">&copy; 2020 creativeLabs.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Developed By</span>
        <a href="#" target="_blank" rel="noopener noreferrer">Harshit Kishor</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
