import { useMutation } from "@apollo/client";
import { Grid } from "@mui/material"
import React, { useState } from "react"
import AuthForm from "../components/AuthForm"
import currentUser from "../queries/currentUser";
import login from "../queries/login"


const Login = () => {
    const [LoginFunction] = useMutation(login, { refetchQueries: [currentUser] });
    const [emailError, setEmailError] = useState(false)
    const [passError, setPassError] = useState(false)

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const onClick = async (email, password) => {
        if (email.match(mailFormat)) {
            try {
                const loggedIn = await LoginFunction({ variables: { email, password } },)
                // console.log(loggedIn)
            } catch (error) {
                setPassError(true)
                setEmailError(true)
            }
        } else {
            setEmailError(true)
        }

    }

    return <AuthForm
        onClick={onClick}
        buttonText="Login"
        emailError={emailError}
        setEmailError={setEmailError}
        passError={passError}
        setPassError={setPassError}
    />

}

export default Login