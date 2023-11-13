import { Outlet, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

function SideBar() {
  return (
    <>
      <Navbar />
      <div className="flex  relative">
        <div className="w-[18.056vw] h-[950px]  bg-white custom-shadow mt-4 ml-4">
          <div className="flex items-center justify-between">
            <img src="/images/logo.png" className="mb-7" alt="logo" />
            <img src="/images/Icon.png" className="mb-7 mr-6" alt="icon" />
          </div>

          <NavLink
            to="/"
            className="custom-navlink flex items-center p-4
             "
          >
            <img src="/images/dashboard.svg" alt="dashboard"></img>

            <span className="ml-2">Dashboard</span>
          </NavLink>
          <NavLink
            to="/users"
            className="custom-navlink flex items-center  p-4 "
          >
            <img src="/images/user.svg" alt="Dashboard Icon" />
            <span className="ml-2">Users</span>
          </NavLink>

          <NavLink
            to="/events"
            className="custom-navlink flex items-center  p-4 "
          >
            <img src="/images/events.svg" alt="Dashboard Icon" />
            <span className="ml-2">Events</span>
          </NavLink>
          <NavLink
            to="/messages"
            className="custom-navlink flex items-center  p-4"
          >
            <img src="/images/message.svg" alt="Dashboard Icon" />
            <span className="ml-2">Messages</span>
          </NavLink>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default SideBar;
