import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import AdminAuth from "./pages/AdminAuth";
import AdminDashboard from "./pages/AdminDashboard";
import Protected from "./components/Protected";
import Home2 from "./pages/Home2";

export const router = createBrowserRouter([
    {
        path: "/2",
        element: <Home2 />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/admin/login",
        element: <AdminAuth />
    },
    {
        path: "/admin/dashboard",
        element: (
            <Protected>
                <AdminDashboard />
            </Protected>
        )
    }
]) 