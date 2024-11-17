import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "@/components/Header";

export default function About() {
    return (
        <div className="h-screen bg-[#534d42] text-white">
            <title>Investify - About</title>
            <Header currentPage={'about'}/>
            <div className="hero h-screen"
                style={{backgroundImage: "url(https://wallpapers.com/images/hd/stock-market-background-wdb83di320cjbktg.jpg)"}}>
                <div className="hero-overlay bg-opacity-60" />
                <div className="hero-content text-center">
                    <div className="max-w-2xl -translate-y-10">
                        <h1 className="text-white mb-5 text-6xl font-bold">What is Investify?</h1>
                        <p className="text-white">
                            Investify is an AI investment platform that helps users easily access real-time and accurate stock data.
                            It uses powerful tools from AWS, like Amazon EC2, to keep the platform running smoothly, even when lots of
                            people are using it at the same time. Amazon S3 is used to safely store financial information, reports,
                            and user data, making it quick and easy to access. To help users make better choices, Investify uses Amazon
                            Bedrock for AI-powered insights, like predicting market trends and giving personalized advice. It also works
                            with the EODHD API to provide up-to-date and past stock data, so users can make informed decisions about
                            their investments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}