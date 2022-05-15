import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import Header from '../components/Header'
import { ROUTES } from '../utils/constants'

const ProtectedRoute = (props) => {

    const { element: Element } = props
    const user = useSelector((state) => state.currentUser);

    const navigate = useNavigate()

    return (
        <Grid container>
            <Header />
            {user ?
                Element && <Element />
                :
                navigate(ROUTES.LOGIN)}
        </Grid>
    )
}

export default ProtectedRoute
