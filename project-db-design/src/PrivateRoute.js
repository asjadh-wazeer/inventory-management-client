import React, { useContext } from 'react';
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';

import { UserContext } from './App';
const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Routes>
            <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email ? (
            children
          ) : (
            <Navigate
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
        </Routes>
    );
};


export default PrivateRoute;