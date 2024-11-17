import React from "react";
import { useState, useEffect } from "react";
import NavButton from "@/components/NavButton";
import Image from "next/image";

export default function Header({currentPage}) {

    const isHome = (currentPage == 'home');
    const isAbout = (currentPage == 'about');

    return (
        <div className={"sticky top-0 z-50 w-full h-20 flex items-center px-2"} style={{ backgroundColor: '#272624', color: 'white'}}>
            <div className={"flex flex-row justify-between items-center w-full py-3"}>
                <div className={"flex flex-row w-40"}>
                    <a href="/" style={{ display: 'inline-block' }}>
                        <img src="./Logo.png" style={{ width: "75%", height: "75px" }} alt="Logo" />
                    </a>
                </div>

                <div className="flex-grow text-center">
                    <h1 className="text-2xl font-bold -translate-x-5" style={{ color: '#dcc679' }}>Investify</h1>
                </div>

                <div className={"flex flex-row justify-center space-x-4"}>
                    <NavButton text={<strong>Home</strong>} redirect_uri={'/'} isCurrentPage={isHome} />
                    <NavButton text={<strong>About</strong>} redirect_uri={'/about'} isCurrentPage={isAbout} />
                </div>
            </div>
        </div>
    )
}