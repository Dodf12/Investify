import Image from "next/image";
import localFont from "next/font/local";

import Header from "@/components/Header";


export default function Home() {
  return (
      <div className={"h-screen"}>
        <Header currentPage={'home'}/>
      </div>
  );
}
