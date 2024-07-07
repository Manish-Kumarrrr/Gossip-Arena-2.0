import React, { useEffect } from "react";
import { useRef } from "react";

function OptionMenu({  cordinate, contextMenu, setContextMenu }) {
  const contextMenuRef = useRef(null);
  const handleClick = (e) => {
    e.stopPropagation();
    // callback();
    setContextMenu(false);
  };
console.log("OptionMenu");
 
  return (
    <div
      className={`bg-white fixed py-2 z-50  shadow-xl `}
      ref={contextMenuRef}
      id = 'context-menu'
      style={{
        top: cordinate.y,
        left: cordinate.x,
        
      }}
    >
      <ul>
        
        <li className="px-5 py-2 cursor-pointer hover:bg-black hover:text-white " onClick={(e) => handleClick(e)}>Sort By first letter</li>
        <li className="px-5 py-2 cursor-pointer hover:bg-black hover:text-white " onClick={(e) => handleClick(e)}>Sort By second letter</li>
        <li className="px-5 py-2 cursor-pointer hover:bg-black hover:text-white " onClick={(e) => handleClick(e)}>Sort By recent chat</li>
        
      </ul>
    </div>
  );
}

export default OptionMenu;
