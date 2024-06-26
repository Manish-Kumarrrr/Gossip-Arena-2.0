import Avatar from "@/components/common/Avatar";
import Input from "@/components/common/Input";
import { useStateProvider } from "@/context/StateContext";
import { ONBOARD_USER_ROUTE } from "@/utils/ApiRoutes";
import Image from "next/image";
import { useRouter } from "next/router";
import React, {useState, useEffect} from "react";
import axios from "axios";
import { reducerCases } from "@/context/constants";

function onboarding() {
  const router = useRouter();
  const [{ userInfo,newUser },dispatch] = useStateProvider();
  

  const [name,setName] = useState(userInfo?.name || "");
  const [about,setAbout] = useState("");
  const [image,setImage] = useState("/default_profile.png");

  const validateDetails = () =>{
    if(name.length<3)return false;
    return true;
  }

  useEffect(()=>{
    if(!newUser && !userInfo?.email )router.push("/login");
    else if(!newUser && userInfo?.email)router.push("/");
  },[newUser,userInfo,router])

  const onboardUserHandler = async ()=>{
    if(validateDetails()){
      const email= userInfo.email;
      try{
        const {data} =await axios.post(ONBOARD_USER_ROUTE,{
          email,name,about,image,
        });
        console.log(data);

        if(data?.status){
          dispatch({ type: reducerCases.SET_NEW_USER, newUser: true });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userInfo: {
              id:data.id,
              name,
              email,
              profileImage:image,
              status: about,
            },
          });
          router.push("/")
        }
      }
      catch(err){
        console.log(err);
      }
    }
  }


  return (
    <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center  ">
      <div className="flex items-center justify-center gap-2 ">
        <Image
          src="/home-logo.png"
          alt="Gossip Arena 2"
          height={300}
          width={300}
        />
        <span className="text-7xl">Gossip Arena 2.0</span>
      </div>
      <h2 className="text-2xl">Create Your Profile</h2>
      <div className="flex gap-6 mt-6">
        <div className="flex flex-col items-center justify-center mt-5 gap-6 ">
          <Input name="Display Name" state={name} setState={setName} label />
          <Input name="About" state={about} setState={setAbout} label />
          <div className="flex items-center justify-center ">
            <button className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg" onClick={onboardUserHandler}>Create Profile</button>
          </div>
        </div>
        
        <div>
          <Avatar type="xl" image={image} setImage={setImage}/>
        </div>
      </div>
    </div>
  );
}

export default onboarding;
