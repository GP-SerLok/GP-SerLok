import {
    createBrowserRouter,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    }
]);

export default router