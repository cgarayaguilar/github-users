import { useState, useEffect } from 'react'
import { getSingleUser } from '../services/getSingleUser'

export default function useSingleUser(login) {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    setLoading(true)
    getSingleUser(login).then(foundUser => {
      setUser(foundUser)
      setLoading(false)
    })
  }, [login])

  return { loading, user }
}
