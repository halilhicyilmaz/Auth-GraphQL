import { useQuery, useMutation } from "@apollo/client"
import { Button, Grid, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import currentUser from '../queries/currentUser'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from "../utils/constants"
import logOut from "../queries/logOut"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser } from "../redux/currentUser"


const Header = () => {
    const styles = {
        root: {
            justifyContent: "space-between",
            alignContent: "center",
            minHeight: "100px",
            backgroundColor: "darkred",
            padding: "15px"
        }
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = useSelector((state) => state.currentUser);

    const [LogOut] = useMutation(logOut, {
        onCompleted: (data) => {
            dispatch(setCurrentUser(""))
        }
    });

    const { loading, error, data, refetch } = useQuery(currentUser
        , {
            onCompleted: (data) => {
                dispatch(setCurrentUser(
                    data.user
                ))
            }
        }
    )


    const Buttons = () => {
        if (loading) { return <div /> }
        if (user) {
            return <Grid item>
                <Button variant="contained" onClick={() => { LogOut() }}> Logout </Button>
            </Grid>
        } else {
            return <Grid container item spacing={2}>
                <Grid item>
                    <Button variant="contained" onClick={() => navigate(ROUTES.LOGIN)}> Login </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={() => navigate(ROUTES.SIGNUP)}> Signup </Button>
                </Grid>
            </Grid>
        }

    }

    return (
        <Grid container sx={styles.root}>
            <Grid item>
                <Typography variant="h3">Home</Typography>
            </Grid>
            <Grid item>
                {Buttons()}
            </Grid>
        </Grid>
    )
}

export default Header