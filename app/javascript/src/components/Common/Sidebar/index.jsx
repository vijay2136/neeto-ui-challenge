import React, { useState } from "react";

import { Toastr } from "neetoui";
import { Sidebar } from "neetoui/layouts";
import { useHistory } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";
import { useUserState } from "contexts/user";

import { APP_NAME, SIDENAV_LINKS } from "./constants";

const Sidenav = () => {
  const history = useHistory();
  const authDispatch = useAuthDispatch();

  const { user } = useUserState();

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const handleLogout = async () => {
    try {
      await authenticationApi.logout();
      authDispatch({ type: "LOGOUT" });
      resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      Toastr.error(error);
    }
  };

  const bottomLinks = [
    {
      label: "My Profile",
      onClick: () => history.push("/my/profile"),
    },
    {
      label: "Logout",
      onClick: handleLogout,
    },
  ];

  return (
    <Sidebar
      collapsible
      isCollapsed={isSidebarCollapsed}
      navLinks={SIDENAV_LINKS}
      appName={APP_NAME}
      profileInfo={{
        name: `${user.first_name} ${user.last_name}`,
        imageUrl: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        email: user.email,
        bottomLinks,
      }}
      onCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      changelogProps={{ id: "neetochangelog-trigger" }}
    />
  );
};

export default Sidenav;
