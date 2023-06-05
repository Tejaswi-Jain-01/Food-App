import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import {BsGithub} from "react-icons/bs"
import Alert from '@mui/material/Alert';



function Footer() {

    
    return (

        <>
            <div className="bg-black w-full h-[5rem] flex relative ">
                <div className="space-x-14 m-auto flex relative">
                <FaInstagram  className="fill-white text-6xl shadow-lg hover:shadow-pink-500   hover:fill-pink-500 cursor-pointer " />
             <BsFacebook className="fill-white text-6xl  shadow-lg hover:shadow-blue-500  hover:fill-blue-500 "  />
                <FaFacebookMessenger className="fill-white text-6xl  shadow-lg hover:shadow-pink-500  hover:fill-pink-600 " />
                <BsWhatsapp className="fill-white text-6xl shadow-lg hover:shadow-green-500  hover:fill-green-600" /> 
                <BsGithub className="fill-white text-6xl   shadow-lg hover:shadow-red-500 hover:fill-red-300" />
                </div>
            </div>
        </>
    )
}

export default Footer;