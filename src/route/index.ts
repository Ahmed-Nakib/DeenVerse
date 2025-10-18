
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ItemDetailsPage from "../component/ItemDetailsPage";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/item/:id",
        Component: ItemDetailsPage,
      },
    ]
  },

]);

export default router;