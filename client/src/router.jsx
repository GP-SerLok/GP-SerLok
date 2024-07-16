import {
    createBrowserRouter,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainLayout from "./components/MainLayout";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />
    }
]);

export default router