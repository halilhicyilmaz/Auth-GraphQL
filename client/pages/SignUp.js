import { useMutation } from "@apollo/client";
import React, { useState } from "react"
import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm"
import signUp from "../queries/signUp";
import { setCurrentUser } from "../redux/currentUser";

const SignUp = () => {
    const dispatch = useDispatch()

    const [SignUpFunction] = useMutation(signUp,
        {
            onCompleted: (data) => {
                dispatch(setCurrentUser(
                    data.signUp
                ))
            }
        });
    const [error, setError] = useState(false)

    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const onClick = async (email, password) => {
        if (email.match(mailFormat)) {
            try {
                const signUp = await SignUpFunction({ variables: { email, password } })
            } catch (error) {
                console.log(error)
            }
        } else {
            setError(true)
        }

    }

    return <AuthForm onClick={onClick} buttonText="Signup" error={error} setError={setError} />

}

export default SignUp