export const getSingleUser = async login => {
  const apiURL = `https://api.github.com/users/${login}`

  try {
    //Obtenemos la data del usuario
    const response = await fetch(apiURL)
    const user = await response.json()

    //Obtenemos la lista de repositorios
    const response2 = await fetch(user.repos_url)
    const repos = await response2.json()

    const {
      id,
      login,
      avatar_url,
      location,
      followers,
      following,
      bio,
      name,
    } = user
    return {
      id,
      login,
      avatar_url,
      location,
      followers,
      following,
      bio,
      name,
      repos,
    }
  } catch (err) {
    console.error(err.message)
  }
}
