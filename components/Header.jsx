import React from "react";
import { useState, useEffect } from "react";
import NavButton from "@/components/NavButton";
import Image from "next/image";

export default function Header({currentPage}) {

    const isHome = (currentPage === 'home');
    const isAbout = (currentPage == 'about');

    return(
        <div className={"sticky top-0 z-50 w-full h-20 flex items-center px-2 border-b-2 border-gray500"}>
            <div className={"flex flex-row justify-between items-center w-full py-3 px-3"}>
                <div className={"flex flex-row"}>
                    Logo goes here
                </div>
                <div className={"flex flex-row"}>
                    <NavButton text={"Home"} redirect_uri={'/'} isCurrentPage={isHome}/>
                    <NavButton text={"About"} redirect_uri={'/about'} isCurrentPage={isAbout}/>
                </div>
                <div className={"flex flex-row"}>
                    Signup, Login
                </div>

            </div>
        </div>
    )
}