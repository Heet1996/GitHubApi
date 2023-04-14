import {Navigate, Route} from "react-router"
import React from 'react';

let PrivateRoute = ({component: Component, ...rest}) => {

    return (
        <Route {...rest} render={(props) =>
            rest.token ? <Component {...props} /> : <Navigate to="/token"/>
        }/>

    )

}
export default PrivateRoute;