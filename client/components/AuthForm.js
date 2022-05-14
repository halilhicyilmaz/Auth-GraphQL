import { Button, Grid, TextField, Typography } from "@mui/material"
import React, { useState } from "react"

const AuthForm = (props) => {
    const { onClick, buttonText, emailError, setEmailError, passError, setPassError } = props

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return <Grid container spacing={2} sx={{ padding: "20px" }}>
        <Grid item xs={12}>
            <Typography variant="h2">{buttonText}</Typography>
        </Grid>
        <Grid item xs={12}>
            <TextField
                required
                id="outlined-required"
                label="Email"
                value={email}
                error={emailError}
                onChange={(e) => {
                    setEmail(e.target.value)
                    setEmailError(false)
                }}
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
                required
                id="outlined-required"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                    setPassError(false)
                }}
                error={passError}

            />
        </Grid>
        <Grid item xs={12}>
            <Button variant="contained" onClick={() => onClick(email, password)}> {buttonText} </Button>
        </Grid>
    </Grid>
}
export default AuthForm