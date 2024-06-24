import React, { useEffect } from "react";
import { useRef } from "react";
function ContextMenu({ option, cordinate, contextMenu, setContextMenu }) {
  const contextMenuRef = useRef(null);
  const handleClick = (e, callback) => {
    e.stopPropagation();
    callback();
    setContextMenu(false);
  };
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id !== "context-opener") {
        if (
          contextMenuRef.current &&
          !contextMenuRef.current.contains(event.target)
        ) 
          setContextMenu(false);
        }
      };
      document.addEventListener("click", handleOutsideClick);
      
      return () => {
        document.removeEventListener("click", handleOutsideClick);
        
      };
    
  }, []);
  return (
    <div
      className={`bg-dropdown-background fixed py-2 z-[100]   shadow-xl `}
      ref={contextMenuRef}
      id = 'context-menu'
      style={{
        top: cordinate.y,
        left: cordinate.x,
      }}
    >
      <ul>
        {option.map(({ name, callback }) => (
          <li
            key={name}
            onClick={(e) => handleClick(e, callback)}
            className="px-5 py-2 cursor-pointer hover:bg-background "
          >
            <span className="text-white ">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContextMenu;
