import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//layout
import SideBar from "./layout/SideBar";
//pages
import Dasboard from "./pages/Dasboard";
import Users from "./pages/Users";
import Events from "./pages/Events";
import Messages from "./pages/Messages";
import Contact from "./pages/Form";
import View from "./pages/View";
import Edit from "./pages/Edit";
import Editevent from "./pages/Event/Edit-Event";
import Eventview from "./pages/Event/Event-view";

//component
import Interested from "./pages/Event/component/Interested";
import Going from "./pages/Event/component/Going";

import Comments from "./pages/Event/component/Comnents";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SideBar />}>
      <Route index element={<Dasboard />} />

      <Route path="users" element={<Users />} />
      <Route path="views" element={<View />} />
      <Route path="edit" element={<Edit />} />

      <Route path="events" element={<Events />} />
      <Route path="events-edit" element={<Editevent />} />
      <Route path="events-views" element={<Eventview />}>
        <Route path="interested" element={<Interested />} />
        <Route path="going" element={<Going />} />

        <Route path="comments" element={<Comments />} />
      </Route>
      <Route path="messages" element={<Messages />} />
      <Route path="form" element={<Contact />} />
    </Route>
  )
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
