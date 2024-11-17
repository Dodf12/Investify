import Image from "next/image";
import localFont from "next/font/local";

import Header from "@/components/Header";
import Title from "@/components/Title";
import CardInformation from "@/components/CardInformation";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
	<div style={{ backgroundColor: '#534d42', color: 'white'}}>
		<title>Investify - Home</title>
		<Header currentPage={'home'}/>
		<Title/>
		<SearchBar/>
		<CardInformation/>
	</div>
  );
}
