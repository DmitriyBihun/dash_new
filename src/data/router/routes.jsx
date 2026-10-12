import HomePage from '../../pages/Home/HomePage';
import WorkPage from '../../pages/Work/WorkPage';
import NotFoundPage from '../../pages/NotFound/NotFoundPage';

export const routesConfig = [
    {
        index: true,
        label: 'Home',
        path: '/',
        element: <HomePage />
    },
    {
        path: 'works',
        label: 'Works',
        element: <WorkPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    },
];

export const navRoutes = routesConfig.filter((route) => route.label);

