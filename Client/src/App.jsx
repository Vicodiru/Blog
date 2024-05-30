// import {
//   RouterProvider,
//   ScrollRestoration,
//   createBrowserRouter,
// } from "react-router-dom";

// import {
//   About,
//   CreatePost,
//   Dashboard,
//   Home,
//   HomeLayout,
//   Projects,
//   SignIn,
//   SignUp,
// } from "./pages";
// import { OnlyAdminPrivateRoute, PrivateRoute } from "./components";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <HomeLayout />
//         <ScrollRestoration />
//       </>
//     ),
//     children: [
//       { index: true, element: <Home /> },
//       { path: "/about", element: <About /> },
//       {
//         element: <PrivateRoute />,
//         children: [{ path: "/dashboard", element: <Dashboard /> }],
//       },
//       {
//         element: <OnlyAdminPrivateRoute />,
//         children: [{ path: "/create-post", element: <CreatePost /> }],
//       },
//       { path: "/Sign-in", element: <SignIn /> },
//       { path: "/Sign-up", element: <SignUp /> },
//       { path: "/Projects", element: <Projects /> },
//     ],
//   },
//   ,
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Header,
  FooterCom,
  PrivateRoute,
  OnlyAdminPrivateRoute,
  ScrollToTop,
} from "./components";
import {
  About,
  CreatePost,
  Dashboard,
  Home,
  Post,
  Projects,
  SignIn,
  SignUp,
  UpdatePost,
} from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/project" element={<Projects />} />
        <Route path="/post/:postSlug" element={<Post />} />
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}
