import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import OnlineUsers from "../components/OnlineUsers";
import { useCollection } from "../hooks/useCollection";

function MainLayout() {
  const { data } = useCollection("users");
  console.log(data);
  return (
    <div className="flex">
      <Sidebar />
      <main className="min-h-screen w-full overflow-x-auto bg-base-100 pb-24 pt-24 dark:bg-base-200 md:relative md:pt-0  lg:max-h-screen">
        <Header />
        <Outlet />
      </main>
      <OnlineUsers data={data} />
    </div>
  );
}

export default MainLayout;
