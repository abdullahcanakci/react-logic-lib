import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function Aside({ toggled, setToggled, components }) {
  return (
    <ProSidebar breakPoint="lg" toggled={toggled} onToggle={setToggled}>
      <Menu iconShape="square">
        {components.map((component) => (
          <MenuItem key={component.title}>
            <Link to={component.path}> {component.title}</Link>
          </MenuItem>
        ))}
      </Menu>
    </ProSidebar>
  );
}
