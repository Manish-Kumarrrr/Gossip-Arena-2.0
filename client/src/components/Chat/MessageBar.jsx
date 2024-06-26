import React from "react";
import { ImAttachement } from "react-icons/im";
import { BsEmojiSmile } from "react-icons/bs";

function MessageBar() {
  return (
    <div className="bg-panel-header-background h-20 px-4 flex items-center gap-6 relative">
      <>
        <div className="flex gap-6">
          <BsEmojiSmile
            className="text-panel-header-icon cursor-pointer text-xl"
            title="Emoji"
          />
          {/* <ImAttachement
            className="text-panel-header-icon cursor-pointer text-xl"
            title="Attach File"
          /> */}
        </div>
        <div className="w-full rounded-lg h-10 flex items-center">
          <input
            type="text"
            placeholder="Type a message"
            className="bg-input-background text-sm focus:oultine-none text-white h-10 rounded-lg px-5 py-4 w-full"
          />
        </div>
      </>
    </div>
  );
}

export default MessageBar;
