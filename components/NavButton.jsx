import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function NavButton({text, redirect_uri, isCurrentPage}) {

    // Mihir: this is the next js router that will push users to the relevent page
    const router = useRouter();

    // void function to handle click, redirects the user to the correct page
    const handleClick = () => {
        if (redirect_uri) {
            router.push(redirect_uri);
        }
    };

    return(
        <button onClick={handleClick}>
            {isCurrentPage ? (
                <div className={"p-2 hover:underline hover:text-black transition-colors duration-500"}>
                    {text}
                </div>
            ) : (
                <div className={"p-2 hover:underline hover:text-black transition-colors duration-500"}>
                    {text}
                </div>
            )}
        </button>
    );
}