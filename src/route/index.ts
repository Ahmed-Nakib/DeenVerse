
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ItemDetailsPage from "../component/ItemDetailsPage";
import Mission from "../pages/OurMission";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/Contact";
import RozaLecture from "../component/Lecture";
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
      {
        path: "mission",
        Component: Mission,
      },
      {
        path: "about",
        Component: AboutUs,
      },
      {
        path: "contact",
        Component: ContactUs,
      },
      {
        path: "lecture",
        Component: RozaLecture,
      },
    ]
  },

]);

export default router;