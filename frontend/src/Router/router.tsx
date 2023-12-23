import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Login } from "../Pages/Login";
import { CreateAccount } from "../Pages/CreateAccount";
import HomePage from "../Pages/HomePage";
import RentPc from "../Pages/RentPc";
import BarMenu from "../Pages/BarMenu";
import RentConsole from "../Pages/RentConsole";
import AdminHome from "../Pages/AdminHome";
import ManageCustomer from "../Pages/ManageCustomer";


const routes: RouteObject[] = [
    {
        path: "/",
        element: <Login />
    },

    {
        path: "/Home",
        element: <HomePage />
    },

    {
        path: "/AdminHome",
        element: <AdminHome />
    },
    
    {
        path: "/CreateAccount",
        element: <CreateAccount />
    },

    {
        path: "/RentPc",
        element: <RentPc />
    },

    {
        path: "/RentConsole",
        element: <RentConsole />
    },

    {
        path: "/BarMenu",
        element: <BarMenu />
    },

    {
        path: "/ManageCustomer",
        element: <ManageCustomer />
    }

];

export const router = createBrowserRouter(routes)