import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

export default function about() {
    return(
        <div className={"h-screen"}>
            <Header currentPage={'about'}/>
            This is the about page
        </div>
    );
}