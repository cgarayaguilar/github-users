import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

const useStyles = makeStyles({
  table: {
    width: '100%',
    margin: '16px auto',
  },
})

export default function ListOfRepos({ repos }) {
  const classes = useStyles()

  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Nombre</TableCell>
            <TableCell align="center">Forks</TableCell>
            <TableCell align="center">Issues abiertos</TableCell>
            <TableCell align="center">Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repos &&
            repos.map(({ id, name, forks, open_issues, html_url }) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {id}
                </TableCell>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="center">{forks}</TableCell>
                <TableCell align="center">{open_issues}</TableCell>
                <TableCell align="center">
                  <Button href={html_url} target="_blank" color="primary">
                    Ver
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

ListOfRepos.propTypes = {
  //Recibimos un arrays de objetos con todos los repositorios del usuario seleccionado
  repos: PropTypes.arrayOf(PropTypes.object),
}
