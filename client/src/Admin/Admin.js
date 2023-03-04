import React, { Fragment, useState } from "react";
import AdminContent from "./components/AdminContent";
import AdminHeader from "./components/AdminHeader";
import Sidebar from "./components/Sidebar";

const Admin = () => {
  const [navbarId, setNavbarId] = useState("dashboad");
  const [active, setActive] = useState(0);
  const handleChangeTab = (index) => {
    setActive(index);
    if (index === 0) {
      setNavbarId("dashboad");
    } else if (index === 1) {
      setNavbarId("orders");
    }
  };
  return (
    <Fragment>
      <div className="admin-page flex w-full">
        <Sidebar onClick={handleChangeTab} activeId={active} />
        <div className="flex w-full flex-col">
          <AdminHeader />
          <AdminContent active={active} />
        </div>
      </div>
    </Fragment>
  );
};

export default Admin;
