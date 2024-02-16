import { Navigate } from 'react-router-dom';
import { AppRoutes, AutorizationStatus } from 'src/shared/constats';


type PrivatRouteProp = {
    authStatus: AutorizationStatus;
    children: JSX.Element;
}

const PrivatRoute = ({ authStatus, children }: PrivatRouteProp) => (
  authStatus === AutorizationStatus.Auth
    ? children
    : <Navigate to={AppRoutes.Login} />
);

export default PrivatRoute;
