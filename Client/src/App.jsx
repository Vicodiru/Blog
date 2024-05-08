import {
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";

import { About, Dashboard, Home, Projects, SignIn, SignUp } from "./pages";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/Sign-in", element: <SignIn /> },
  { path: "/Sign-up", element: <SignUp /> },
  { path: "/Projects", element: <Projects /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
