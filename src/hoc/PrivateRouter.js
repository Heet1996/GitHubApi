import {Navigate} from "react-router"
import React, {useState} from 'react';

let PrivateRoute = ({ children}) => {
    const auth = useState();
    // return rest.token ? children : <Navigate to="/token" />;
    return children;
};

export default PrivateRoute;