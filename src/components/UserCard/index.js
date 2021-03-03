import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Link } from 'wouter'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  media: {
    height: 140,
  },
})

const UserCard = ({ id, login, avatar_url, followers }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Link to={`/user/${login}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={avatar_url}
            title={login}
          />
          <CardContent>
            <Typography variant="body1" component="h3">
              <i className="fas fa-id-badge"></i>
              Id: <strong>{id}</strong>
            </Typography>
            <Typography variant="subtitle1" component="h4">
              <i className="fab fa-github"></i>
              Username:
              <strong>{login}</strong>
            </Typography>
            <Typography variant="subtitle1" component="h4">
              <i className="fas fa-user-friends"></i>
              Followers:
              <strong> {followers}</strong>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  )
}

UserCard.propTypes = {
  id: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
  avatar_url: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
}

export default UserCard
