import React from "react";
import { Header, FooterCom } from "../components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <FooterCom />
    </>
  );
};

export default HomeLayout;
