import React from "react";
import Image from "next/image";
import logo from "../images/logo.png";

const Footer =() =>{
    return (
    <div className="w-full h-20 bg-amazon_light text-gray-400 flex items-center justify-center gap-4">
        <Image className="w-24" src={logo} alt="Logo"/>
        <p className="text-sm -mt-4">
            All rights reserved {" "}
            <a className="hover:text-white hoverunderline decoration-[1px]
            cursor-pointer duration-250" href="https://mark-elasfar.web.app/" target="_blank">
            @Mark</a></p>
    </div>
    );
};

export default Footer;