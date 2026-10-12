import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { RouteError } from "../../components/ErrorBoundary/ErrorBoundary";
import { routesConfig } from "./routes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <RouteError />,
        children: routesConfig
    },
]);