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
import Package from "../pages/Package/Package";
import CityWiseProperties from "../pages/CityWiseProperties/CityWiseProperties";
import PackageList from "../pages/Package/PackageList";
import MyPackage from "../pages/Package/MyPackage";
import AddType from "../pages/Type/AddType";
import ListType from "../pages/Type/ListType";

import AddBooking from "../pages/Booking/AddBooking";
import ListBooking from "../pages/Booking/ListBooking";
import EditBooking from "../pages/Booking/EditBooking";
import EditType from "./../pages/Type/EditType";

import AddPackage from "../pages/Package/AddPackage";

import SingleProperty from "../pages/Property/SinglePropety";
import ListProperty from "../pages/Property/ListProperty";
import AddProperty from "../pages/Property/AddProperty";
import EditProperty from "../pages/Property/EditProperty";
import SinglePackage from "../pages/Package/singlePackage";

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
        path: "/properties/city/:id",
        element: <CityWiseProperties />,
      },
      {
        path: "/single-property/:id",
        element: <SingleProperty />,
      },
      {
        path: "/single-package/:id",
        element: <SinglePackage />,
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
      {
        path: "/admin/dashboard/user/package-list",
        element: <PackageList />,
      },
      {
        path: "/admin/dashboard/user/add-package",
        element: <AddPackage />,
      },
      {
        path: "/admin/dashboard/user/my-package",
        element: <MyPackage />,
      },
      {
        path: "/admin/dashboard/add-type",
        element: <AddType />,
      },
      {
        path: "/admin/dashboard/list-type",
        element: <ListType />,
      },
      {
        path: "/admin/dashboard/edit-type",
        element: <EditType />,
      },
      {
        path: "/admin/dashboard/list-property",
        element: <ListProperty />,
      },
      {
        path: "/admin/dashboard/add-property",
        element: <AddProperty />,
      },
      {
        path: "/admin/dashboard/edit-property",
        element: <EditProperty />,
      },
      {
        path: "/admin/dashboard/add-booking",
        element: <AddBooking />,
      },
      {
        path: "/admin/dashboard/list-booking",
        element: <ListBooking />,
      },
      {
        path: "/admin/dashboard/edit-booking",
        element: <EditBooking />,
      },
    ],
  },
]);

export default router;
