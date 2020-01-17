import React from 'react';
import { RouteProps, Route, Redirect } from "react-router-dom";
import { getLocalStorage } from "../../utils/localStorage";
import { USER_FORGOTPASSWORD } from "../../constants/constants";

const isForgotPassword = () => {
  const is_forgot_password = getLocalStorage(USER_FORGOTPASSWORD);
  return is_forgot_password && is_forgot_password.length > 0;
};

interface PrivateRouteForgotPasswordProps extends RouteProps {
  component: any;
}

export const PrivateRouteForgotPassword = (props: PrivateRouteForgotPasswordProps) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) =>
        isForgotPassword() ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: '/forgot-password',
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
};