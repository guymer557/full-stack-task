import React from "react";
import menuConfig from "../../menu-config"
import Menu from "./menu/Menu";

export default function NavBar() {
   return <Menu menuType="navBar" menuNodes={menuConfig}/>
}
