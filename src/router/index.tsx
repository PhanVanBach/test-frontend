import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
