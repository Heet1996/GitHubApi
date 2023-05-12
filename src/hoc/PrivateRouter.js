import {Navigate} from "react-router"
import React from 'react';


let PrivateRoute = ({ children, ...rest}) => {
    return rest.token ? children : <Navigate to="/token"  />;
};

export default PrivateRoute;