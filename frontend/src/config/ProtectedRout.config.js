import React from 'react'
import { Route } from 'react-router-dom';

function ProtectedRout({isUserAuthenticated, component: Component, ...rest}) {
    console.log("path ::", rest)
    return (
        <Route
            {...rest}
            render={props => {
            return <Component {...props} />;
            }}
        />
    )
}

export default ProtectedRout
