import React from "react";
const Dashboard = React.lazy(() => import("../views/dashboard/Dashboard"));
const Registration = React.lazy(() =>
  import("../views/guestViews/Registration")
);
const Login = React.lazy(() => import("../views/guestViews/Login"));
const ForgotPassword = React.lazy(() =>
  import("../views/pages/page500/Page500")
);
const PageNotFound = React.lazy(() => import("../views/pages/page404/Page404"));
const TestPage = React.lazy(() => import("../reusable/ImageAndEmail"));
const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/login", name: "Login", component: Login },
  { path: "/registration", name: "Registration", component: Registration },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/test-page",
    name: "TestPage",
    component: TestPage,
  },

  { path: "/404", name: "PageNotFound", component: PageNotFound },
];

export default routes;
