import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUND = 'not_found',
}

export const RoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOTFOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutesPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutesPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOTFOUND]: {
        path: RoutesPath.not_found,
        element: <NotFoundPage />,
    },
};
