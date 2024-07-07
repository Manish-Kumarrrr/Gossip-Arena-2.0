import React,{useState} from "react";
import { ImAttachement } from "react-icons/im";
import { BsEmojiSmile } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import { useStateProvider } from "@/context/StateContext";
import axios from "axios";
import { ADD_MESSAGE_ROUTE } from "@/utils/ApiRoutes";

function MessageBar() {
  const [{userInfo,currentChatUser},dispatch] = useStateProvider();
  const [message,setMessage] = useState("");
  const sendMessage = async() => {
    try{
      const {data} =await axios.post(ADD_MESSAGE_ROUTE,{
        to:currentChatUser?.id,
        from:userInfo?.id,
        message,
      });
    }
    catch(err){
      console.log(err)
    }
    setMessage("");
  }
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
            onChange={(e)=>setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div className="flex w-10 items-center justify-center ">
          <button className="">
            <MdSend className="text-panel-header-icon cursor-pointer text-xl" title="send messages" onClick={sendMessage} />
            {/* <FaMicrophone className="text-panel-header-icon cursor-pointer text-xl" title="Record"/> */}
          </button>
        </div>
      </>
    </div>
  );
}

export default MessageBar;
