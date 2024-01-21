import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import SignIn from "../pages/Auth/SignIn/SignIn";
import DashBoardLayout from "../layout/DashBoardLayout";
import NotFound from "../pages/404/NotFound";
import AddUser from "../pages/User/AddUser";
import ListUser from "../pages/User/ListUser";
import DashBoard from "../pages/DashBoard/DashBoard";
import AgentList from "../pages/Agents/AgentList";
import AddAgents from "../pages/Agents/AddAgents";
import SeeAllProperties from "../pages/SeeAllProperties/SeeAllProperties";
import Signup from "../pages/Auth/Signup/Signup";
import EditAgents from "../pages/Agents/EditAgents";
import EditUser from "../pages/User/EditUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/properties",
        element: <SeeAllProperties />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  {
    path: "/admin/dashboard",
    element: <DashBoardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/admin/dashboard/add-user",
        element: <AddUser />,
      },
      {
        path: "/admin/dashboard/user-list",
        element: <ListUser />,
      },
      {
        path: "/admin/dashboard/edit-user",
        element: <EditUser />,
      },
      {
        path: "/admin/dashboard/add-agent",
        element: <AddAgents />,
      },
      {
        path: "/admin/dashboard/agent-list",
        element: <AgentList />,
      },
      {
        path: "/admin/dashboard/edit-agent",
        element: <EditAgents />,
      },
    ],
  },
]);

export default router;
