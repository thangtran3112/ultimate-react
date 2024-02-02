import { createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import { RouterProvider } from "react-router-dom";

//https://reactrouter.com/en/6.22.0/routers/create-browser-router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
