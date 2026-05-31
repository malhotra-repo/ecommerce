import { createBrowserRouter } from "react-router"
import Register from "../feature/auth/pages/Register"
import Login from "../feature/auth/pages/Login"
import Dashboard from "./Dashboard"

export const routes = createBrowserRouter([


 {
  path: "/",
  element: <Dashboard />,
 },
 {
  path: "/register",
  element: <Register />,
 },

 {
  path: "/login",
  element: <Login />,
 }
])
