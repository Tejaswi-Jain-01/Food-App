import React from "react";
// import bg from "../src/image/bg.jpg";
import background from "../src/image/background.jpg"


const Home = () => {
  
    return (<>
    <div className="  relative"> 
        <img src={background} className="h-[40rem] w-full opacity-70" />  
        <div className="absolute top-0 left-0  flex w-full h-full container bg-black bg-opacity-25 items-center justify-center">
    <h1 className="text-6xl font-bold text-white">We Don't Make it Until You Order it!</h1>
   </div>      
    </div>

   
    </>
    )
}

export default Home;
