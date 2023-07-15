import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Connect from "../components/Connect";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/connect", element: <Connect /> },
]);

export default router;
