import React from 'react'
import UserCard from '../UserCard/index'
import PropTypes from 'prop-types'

const ListOfUsers = ({ users }) => {
  return (
    <div className="list-of-user">
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  )
}

ListOfUsers.propTypes = {
  //Recibimos un arrays de objetos con todos los usuarios
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ListOfUsers
