import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Experience from "../components/Experience";
import Connect from "../components/Connect";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/experience", element: <Experience /> },
  { path: "/connect", element: <Connect /> },
]);

export default router;
