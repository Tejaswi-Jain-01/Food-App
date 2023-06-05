import React from "react";
import MyRerender from "./components/Rerender";


 const Menu=()=>{
  return(
    <>
   <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 bg-gradient-to-br from-red-500 via-teal-400 to-fuchsia-500 ">
    <MyRerender />
    <MyRerender />
    <MyRerender />
    <MyRerender />
 
    <MyRerender />
    <MyRerender />
    <MyRerender />
 

  </div>
    </>
  )
}

export default Menu