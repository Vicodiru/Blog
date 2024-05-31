import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  DashSidebar,
  DashProfile,
  DashPosts,
  DashUsers,
  DashComments,
} from "../components/";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen grid grid-cols-[1fr_auto]">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-56">
          <DashSidebar />
        </div>
        <div className="flex-1">
          {tab === "profile" && <DashProfile />}
          {tab === "posts" && <DashPosts />}
          {tab === "users" && <DashUsers />}
          {tab === "comments" && <DashComments />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
