import { Navigate } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../enums';

type PropsType = {
  authStatus: AuthStatus;
  children: JSX.Element;
};

export const PrivateRoute = ({ authStatus, children }: PropsType) =>
  authStatus === AuthStatus.NoAuth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
