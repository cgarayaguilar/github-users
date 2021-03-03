import React from 'react'
import ListOfUsers from '../../components/ListOfUsers'
import useUsers from '../../hooks/useUsers'
import Typography from '@material-ui/core/Typography'
import SearchBar from '../../components/SearchBar'
import Logo from '../../components/Logo'
import PageLoader from '../../components/PageLoader'
import FollowersChart from '../../components/FollowersChart'

const Home = () => {
  const { loading, users } = useUsers()

  if (loading) return <PageLoader />

  return (
    <div className="container">
      <Logo />
      <SearchBar />
      <FollowersChart users={users} />
      <Typography gutterBottom variant="h6" component="h2">
        Ultima busqueda
      </Typography>
      <ListOfUsers users={users} />
    </div>
  )
}

export default Home
