import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function NavButton({text, redirect_uri, isCurrentPage}) {

    // Mihir: Next.js router that will push users to relevent page.
    const router = useRouter();

    // void function to handle click, redirects the user to the correct page
    const handleClick = () => {
        if (redirect_uri) {
            router.push(redirect_uri);
        }
    };

    return (
        <button onClick={handleClick}>
            {isCurrentPage ? (
                <div className={"p-2"}
                    style={{ color: "white" }}
                    onMouseEnter={(e) => (e.target.style.color = "#dcc679")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}>
                    {text}
                </div>
            ) : (
                <div className={"p-2"}
                    style={{ color: "white" }}
                    onMouseEnter={(e) => (e.target.style.color = "#dcc679")}
                    onMouseLeave={(e) => (e.target.style.color = "white")}>
                    {text}
                </div>
            )}
        </button>
    );
}