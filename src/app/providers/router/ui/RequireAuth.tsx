import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={RoutesPath.main} state={{ from: location }} replace />;
    }

    return children;
};
