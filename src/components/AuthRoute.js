import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const AuthRoute = ({ children, ...restOfProps }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    return (
        <div>
            <Route {...restOfProps} render={() => {
                return isAuthenticated ? children : <Redirect to="/" />
            }} />
        </div>
    )
}

export default AuthRoute
