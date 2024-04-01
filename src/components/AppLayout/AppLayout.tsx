import { Outlet } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";

const AppLayout = (): JSX.Element => {
  return (
    <main className="flex flex-col md:flex-row h-[100vh]">
      <Sidebar />

      <div className=" w-full overflow-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default AppLayout;
