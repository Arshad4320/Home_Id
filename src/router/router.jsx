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
        path: "/admin/dashboard/agent-list",
        element: <AgentList />,
      },
      {
        path: "/admin/dashboard/add-agent",
        element: <AddAgents />,
      },
    ],
  },
]);

export default router;
