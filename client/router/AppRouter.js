import React from "react"
import { Navigate, Route, Routes, HashRouter } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { ROUTES } from "../utils/constants";
import PublicRoute from "./PublicRoute";
import Home from "../pages/Home"
import ProtectedRoute from "./ProtectedRoute";


const AppRouter = () => {


    return <HashRouter >
        <Routes>
            <Route exact path={ROUTES.INDEX} element={<ProtectedRoute element={Home} />} />
            <Route exact path={ROUTES.HOME} element={<ProtectedRoute element={Home} />} />
            <Route exact path={ROUTES.SIGNUP} element={<PublicRoute element={SignUp} />} />
            <Route exact path={ROUTES.LOGIN} element={<PublicRoute element={Login} />} />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    </HashRouter>
}

export default AppRouter
