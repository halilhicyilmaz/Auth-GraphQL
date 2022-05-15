import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Header from '../components/Header'
import { ROUTES } from '../utils/constants'

const PublicRoute = (props) => {
    const user = useSelector((state) => state.currentUser);

    const { element: Element } = props
    const navigate = useNavigate()

    useEffect(() => {
        if (user) { navigate(ROUTES.HOME) }
    }, [user])

    return (
        <Grid container>
            <Header></Header>
            {Element && <Element />}
        </Grid>
    )
}

export default PublicRoute
