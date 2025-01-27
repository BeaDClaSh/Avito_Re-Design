import React from "react";
import AnimatedBackground from "@/Components/AnimatedBackground";
import Menu from "@/Components/Menu";
import CopyRights from "@/Components/CopyRights";

const shortcuts = {
    API_URL: "https://your-api-url.com", // Укажите свой API URL
    login: "/login",
    register: "/register",
};

const ForU: React.FC = () => {

   return(
       <>
           <Menu/>
       <AnimatedBackground/>
           <div className="pt-8">
               <CopyRights/>
           </div>

       </>
   )
}
    export default ForU;
