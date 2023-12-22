import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          <>
            <li>
              <NavLink>
                <FaHome></FaHome>
                User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myProfile">My Profile</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myWork">My Work</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myProducts">My Products</NavLink>
            </li>
          </>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
