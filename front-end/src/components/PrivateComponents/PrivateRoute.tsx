import React from 'react';
import { RouteProps, Route, Redirect } from "react-router-dom";
import { getTokenFromLocalStorage } from "../../utils/localStorage";
import { AUTHENTICATION_TOKEN } from "../../constants/constants";
import jwtDecode from 'jwt-decode';

const isAuthenticated = () => {
  const token = getTokenFromLocalStorage(AUTHENTICATION_TOKEN);
  try {
    if (token) {
      if (jwtDecode(token).exp < parseInt(Date.now() / 1000 + '')) {
        return false;
      }
      return true;
    } else {
      return false;
    }

  } catch{
    return false;
  }
};

interface PrivateRouteProps extends RouteProps {
  component: any;
}
export const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: '/home',
                state: { from: props.location ,openLoginModal:true }
              }}
            />
          )
      }
    />
  );
};