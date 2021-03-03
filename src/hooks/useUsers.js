import { useState, useEffect } from 'react'
import { getUsers } from '../services/getUsers'

export default function useUsers({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const keywordToUse =
      keyword || localStorage.getItem('lastKeyword') || 'random'

    setLoading(true)
    getUsers({ keyword: keywordToUse }).then(newUsers => {
      setUsers(newUsers)
      setLoading(false)

      //Guardar ultima busqueda en el local storage para mostrarlo en el home posteriormente
      localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword])

  return { loading, users }
}
