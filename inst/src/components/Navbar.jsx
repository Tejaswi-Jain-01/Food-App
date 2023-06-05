import React from "react";
import logofood from "../../src/image/logofood.png";
import logo2 from "../../src/image/logo2.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";


const MyNavbar = () => {
    return (
        <>
            <div className=" flex  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-20 items-center ">

                <img src={logofood} alt="" className=" rounded-[50%] h-[4rem] w-[4rem] ml-6 " />

                <img src={logo2} className=" rounded-2xl h-[4rem] w-[24rem] ml-auto border-2 hover:border-gray-700 " />

                <div className="md:flex hidden ml-auto space-x-6 mr-12 text-black text-2xl font-bold">

                    <div className="shadow-lg hover:shadow-white hover:text-white  cursor-pointer">
                        <NavLink to={"/"}> Home</NavLink>
                    </div>
                    <NavLink to={"/menu"} className="shadow-lg hover:shadow-white hover:text-white cursor-pointer" >Menu</NavLink>

                    <NavLink to={"/about"} className="shadow-lg hover:shadow-white hover:text-white cursor-pointer ">About</NavLink>

                    <NavLink to={"/contact"} className="shadow-lg hover:shadow-white hover:text-white  cursor-pointer">Contact</NavLink>
</div>
                <div className="md:hidden block">
                    <GiHamburgerMenu />
                </div>
            </div>
        </>
    )
}

export default MyNavbar