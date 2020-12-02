export default [
  {
    _tag: "CSidebarNavTitle",
    _children: ["Guest"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Login",
    to: "/login",
    icon: "cil-user",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Registration",
    to: "/registration",
    icon: "cil-user",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Forgot Password",
    to: "/forgot-password",
    icon: "cil-settings",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Test Page",
    to: "/test-page",
    icon: "cil-settings",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];
