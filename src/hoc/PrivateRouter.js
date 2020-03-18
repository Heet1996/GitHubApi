import { Route, Redirect } from "react-router"
import React from 'react';

let PrivateRoute=({component:Component,...rest})=>{
    
    return(
        <Route {...rest} render={(props)=>
            rest.token ? <Component {...props} /> : <Redirect to="/token" />
        } />
        
    )

}
export default PrivateRoute;