import { Navigate } from 'react-router-dom';
import { AppRoutes } from 'src/shared/AppRoutes';
import { AutorizationStatus } from 'src/shared/AutorizationStatus';


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
