import {
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";

import {
  About,
  Dashboard,
  Home,
  HomeLayout,
  Projects,
  SignIn,
  SignUp,
} from "./pages";
import { PrivateRoute } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HomeLayout />
        <ScrollRestoration />
      </>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      {
        element: <PrivateRoute />,
        children: [{ path: "/dashboard", element: <Dashboard /> }],
      },
      { path: "/Sign-in", element: <SignIn /> },
      { path: "/Sign-up", element: <SignUp /> },
      { path: "/Projects", element: <Projects /> },
    ],
  },
  ,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
