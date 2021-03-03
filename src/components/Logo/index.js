import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Link } from 'wouter'

const Logo = () => (
  <Link to="/">
    <div className="logo">
      <Typography align="center" variant="h3" component="h1">
        <i className="fab fa-github"></i>
        Coders
      </Typography>
    </div>
  </Link>
)

export default Logo
