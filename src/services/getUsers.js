const fetchSingleUser = async login => {
  try {
    const response = await fetch(`https://api.github.com/users/${login}`)
    const user = await response.json()

    return user
  } catch (error) {
    console.error(error)
  }
}

export const getUsers = async ({ keyword } = {}) => {
  const apiURL = `https://api.github.com/search/users?q=${keyword}&page=1&per_page=10`

  try {
    const response = await fetch(apiURL)
    const { items = [] } = await response.json()

    if (Array.isArray(items)) {
      const getData = async () => {
        const userPromises = items.map(user => fetchSingleUser(user.login))

        //Obtener los seguidores de  cada usuario
        const users = await Promise.all(userPromises)

        return users
      }

      const users = await getData()

      //Ordenar lista de usuarios por cantidad de followers
      return users.sort((a, b) => {
        if (a.followers > b.followers) return -1

        if (a.followers < b.followers) return 1

        // a must be equal to b
        return 0
      })
    }
  } catch (error) {
    console.error(error)
  }
}
