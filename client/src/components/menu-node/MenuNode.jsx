import React, {useState} from "react";
import Menu from "../menu/Menu";
import "./menu-node.css"

export default function MenuNode(props) {
    const {node, nodeType} = props;
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className={nodeType === "navBar" ? "node-container nav-bar" : "node-container"}
             onMouseEnter={() => setShowMenu(true)}
             onMouseLeave={() => setShowMenu(false)}>
            <div className="node-text-box">
                <span>{node.key}</span>
                {node.subMenu && nodeType !== "navBar" ?
                    <svg viewBox="0 0 32 32" className="arrow" aria-hidden="true">
                        <path d="M11.303 8l11.394 7.997L11.303 24z"/>
                    </svg> : ""
                }
            </div>
            <div className={nodeType === "navBar" ? "sub-menu-nav-bar" : "sub-menu"}>
                {node.subMenu && showMenu ? <Menu menuNodes={node.subMenu}/> : ""}
            </div>
        </div>
    )
}
