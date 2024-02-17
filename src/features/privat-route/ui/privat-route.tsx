import { Navigate } from 'react-router-dom';
import { AppRoutes } from 'src/shared/constans';
import { AutorizationStatus } from 'src/shared/constans';


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
