import React from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Component } from "../App";
interface AsideInterface {
  toggled: boolean;
  setToggled: any;
  components: Array<Component>;
}

export default function Aside({
  toggled,
  setToggled,
  components,
}: AsideInterface) {
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
