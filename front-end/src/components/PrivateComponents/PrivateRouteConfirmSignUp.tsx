import React from 'react';
import { RouteProps, Route, Redirect } from "react-router-dom";
import { getLocalStorage } from "../../utils/localStorage";
import { USER_NOT_CONFIRMED } from "../../constants/constants";

const isNotConfirmed = () => {
  const is_confirmed = getLocalStorage(USER_NOT_CONFIRMED);
  return is_confirmed && is_confirmed.length > 0;
};

interface PrivateRouteUserConfirmedProps extends RouteProps {
  component: any;
}

export const PrivateRouteUserConfirmed = (props: PrivateRouteUserConfirmedProps) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) =>
        isNotConfirmed() ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: '/home',
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
};