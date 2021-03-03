import React from 'react'
import { Link } from 'wouter'
import IconButton from '@material-ui/core/IconButton'

const CloseButton = () => {
  return (
    <div className="container button_container">
      <IconButton>
        <Link to="/">
          <i className="fas fa-times"></i>
        </Link>
      </IconButton>
    </div>
  )
}

export default CloseButton
