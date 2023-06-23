import { Suspense } from "react";
import { AdminRoutes, PublicRoutes } from "./AppRoutes";
import { Route, Routes } from "react-router-dom";




const ParentRoute = {
  superadmin: {
    routes: AdminRoutes,
  },
};

function Index() {
//   const { user, isAuthenticate } = useSelector((state) => state.auth);
const isAuthenticate = true;
const user = {
    name: 'admin',
    role: 'superadmin',
}
  return (
    <Suspense fallback={<div>loading..</div>}>
      <Routes>
        {PublicRoutes?.map((el) => {
          return (
            <Route  path={el.path} element={<el.element />} key={el.path} />
          );
        })}
        {/* Protected Routes */}
        {isAuthenticate &&
          user.role === "superadmin" &&
          ParentRoute[user.role].routes.map((el) => {
            return (
              <Route path={el.path} key={el.path} element={<el.element />} />
            );
          })}
      </Routes>
    </Suspense>
  );
}

export default Index;