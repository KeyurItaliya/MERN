import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux"
const ProtectedRout = ({isUserAuthenticated, component: Component, ...rest}) => {
    return (
        <Route
            render={props => {
                if(isUserAuthenticated === false){
                // console.log("componebnt :: ",Component)
                return <Component {...props} />;
                }else{
                    return (
                        <Redirect
                        to={{
                            pathname: "/login",
                            state: {
                            from: props.location
                            }
                        }}
                        />
                    )
                }
            }}
        />
    )
}

const mapStateToProps = (state) => {
    return{
        isUserAuthenticated : state.auth.isUserAuthenticated
    }
} 

export default connect(mapStateToProps)(ProtectedRout)
