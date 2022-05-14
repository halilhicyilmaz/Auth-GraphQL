import { Grid } from '@mui/material'
import React from 'react'
import Header from '../components/Header'

const PublicRoute = (props) => {

    const { element: Element } = props

    return (
        <Grid container>
            <Header></Header>
            {Element && <Element />}
        </Grid>
    )
}

export default PublicRoute
