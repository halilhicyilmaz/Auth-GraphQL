import { Grid } from '@mui/material'
import React from 'react'
import Header from '../components/Header'

const ProtectedRoute = (props) => {

    const { element: Element } = props

    return (
        <Grid container>
            <Header></Header>
            <Element />
        </Grid>
    )
}

export default ProtectedRoute
