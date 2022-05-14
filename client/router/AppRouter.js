import React from "react"
import { Navigate, Route, Routes, HashRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import { ROUTES } from "../utils/constants";
import PublicRoute from "./PublicRoute";


const AppRouter = () => {


    return <HashRouter >
        <Routes>
            <Route exact path={ROUTES.INDEX} element={<PublicRoute />} />
            <Route exact path={ROUTES.SIGNUP} element={<PublicRoute element={SignIn} />} />
            <Route exact path={ROUTES.LOGIN} element={<PublicRoute element={Login} />} />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    </HashRouter>
}

export default AppRouter
