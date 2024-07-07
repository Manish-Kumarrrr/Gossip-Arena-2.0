import React, {useState} from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import OptionMenu from "./OptionMenu";
function SearchBar() {
  const [contextMenuVisibility, setContextMenuVisibility] = useState(false);
  const [contextMenuCordinates, setContextMenuCordinates] = useState({
    x: 0,
    y: 0,
  });

  const showContextMenu = (e) => {
    e.preventDefault();
    setContextMenuVisibility(true);
    setContextMenuCordinates({ x: e.pageX, y: e.pageY });
    console.log(contextMenuCordinates);
  };


  return (
    <div className="bg-search-input-container-background flex py-3 pl-5 items-center gap-3 h14">
      <div className="bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-lg flex-grow">
        <div>
          <BiSearchAlt2 className="text-panel-header-icon cursor-pointer text-l" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search or Start a new chat"
            className="bg-transparent text-sm focus:outline-none text-white w-full"
          />
        </div>
        
      </div>
      <div className="pr-5 pl-3 ">
        <BsFilter className="text-panel-header-icon cursor-pointer text-l" onClick={(e)=>showContextMenu(e)}/>
        {contextMenuVisibility && <OptionMenu
        //  option={contextMenuOptions}
          cordinate={contextMenuCordinates}
          contextMenu={contextMenuVisibility}
          setContextMenu={setContextMenuVisibility} />
        }
      </div>
    </div>
  );
}

export default SearchBar;
