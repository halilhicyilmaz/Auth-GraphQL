import React from "react"
import { Navigate, Route, Routes, HashRouter } from "react-router-dom";
import Login from "../pages/Login";
import { ROUTES } from "../utils/constants";


const AppRouter = () => {


    return <HashRouter >
        <Routes>
            <Route exact path={ROUTES.INDEX} element={<Login />} />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    </HashRouter>
}

export default AppRouter
