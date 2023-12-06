import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomeScreen from "../pages/HomeScreen";
import DetailsPage from "../pages/DetailsPage";
export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
      },
      {
        index: true,
        path: `detail/:productID`,
        element: <DetailsPage />,
      },
    ],
  },
]);
