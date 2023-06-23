// *******************
// ** Admin Routes **
// *******************
import AdminDashboard from "../Pages/Admin/Dashboard/Index";

// *******************
// ** Client Routes **
// *******************
import ClientHome from "../Pages/Client/Home/Home";

const PublicRoutes = [
  {
    path: "/",
    element: ClientHome,
  }
];


const AdminRoutes = [
  {
    path: "/admin/dashboard",
    element: AdminDashboard,
  }
];

export { AdminRoutes, PublicRoutes };
