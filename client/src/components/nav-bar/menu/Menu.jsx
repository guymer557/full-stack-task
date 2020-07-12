import React from "react";
import MenuNode from "../menu-node/MenuNode";
import "./menu.css";

export default function Menu(props) {
    const {menuNodes, menuType} = props;

    return (
        <div className={menuType === 'navBar' ? "nav-bar menu-container" : "menu-container"}>
            { menuNodes.map((node) => <MenuNode key={node.key} nodeType={menuType} node={node}/>) }
        </div>
    )
}
