import React from 'react'
import useSingleUser from '../../hooks/useSingleUser'
import { Typography } from '@material-ui/core/'
import ListOfRepos from '../../components/ListOfRepos'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import CloseButton from '../../components/CloseButton'
import PageLoader from '../../components/PageLoader'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  divider: {
    height: 20,
    margin: 6,
  },
}))

const Detail = ({ params: { login } }) => {
  const { loading, user } = useSingleUser(login)
  const classes = useStyles()

  if (loading) return <PageLoader />

  return (
    <>
      <CloseButton />
      <div className="profile__container">
        <figure className="image__container">
          <img src={user.avatar_url} alt={user.login} />
        </figure>

        <section className="text__container">
          <Typography
            variant="h5"
            component="h3"
            color="primary"
            align="center"
          >
            Nombre: {user.name}
          </Typography>
          <div className="location__container">
            <Typography variant="subtitle1" component="h4">
              <i className="fab fa-github"></i>
              {user.login}
            </Typography>

            <Divider className={classes.divider} orientation="vertical" />

            {user.location && (
              <Typography variant="subtitle1" component="h3">
                <i className="fas fa-globe-americas"></i>
                {user.location}
              </Typography>
            )}
          </div>

          {user.bio && (
            <Typography
              variant="body1"
              component="h3"
              color="textSecondary"
              align="center"
            >
              {user.bio}
            </Typography>
          )}
          <div className="metrics__container">
            <div className="metrics__item">
              <Typography align="center" variant="h5" component="h2">
                {user.followers}
              </Typography>

              <Typography align="center" color="textSecondary" gutterBottom>
                Seguidores
              </Typography>
            </div>

            <div className="metrics__item">
              <Typography align="center" variant="h5" component="h2">
                {user.following}
              </Typography>

              <Typography align="center" color="textSecondary" gutterBottom>
                Siguiendo
              </Typography>
            </div>

            <div className="metrics__item">
              <Typography align="center" variant="h5" component="h2">
                {user.id}
              </Typography>

              <Typography align="center" color="textSecondary" gutterBottom>
                Id
              </Typography>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <Typography gutterBottom variant="h6" component="h2">
          Lista de repositorios
        </Typography>
        <ListOfRepos repos={user.repos} />
      </div>
    </>
  )
}

Detail.propTypes = {
  //Recibimos el username o login del usuario seleeccionado
  login: PropTypes.string,
}

export default Detail
