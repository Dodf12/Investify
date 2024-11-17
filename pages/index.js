import Image from "next/image";
import localFont from "next/font/local";

import Header from "@/components/Header";
import Title from "@/components/Title";
import CardInformation from "@/components/CardInformation";
import SearchBar from "@/components/SearchBar";

import { useRouter } from 'next/router'; 
import { useState, useEffect } from "react";

// test fetch functions
// async function fetchData() {
// 	const res = await fetch("/api/fetch-data");
// 	const data = await res.json();
// 	console.log(data);
// }

export default function Home() {
	// call the function
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const [tickers, setTickers] = useState([]);
	const router = useRouter();

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const res = await fetch("/api/fetch-data");
				if (!res.ok) throw new Error("Failed to fetch");
				const result = await res.json();
				setData(result.data);

				// Extract tickers from the data
				const tickerList = result.data.map(item => item.ticker);
				setTickers(tickerList);

			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return <p>Loading .. </p>;
	if (error) return <p>Error: {error} </p>;

  return (
	<div style={{ backgroundColor: '#534d42', color: 'white'}}>
		<title>Investify - Home</title>
		<h1>{data?.ticker || "no ticker"}</h1>
		<Header currentPage={'home'}/>
		<Title/>
		{/* Pass tickers to SearchBar */}
		<SearchBar tickers={tickers} />
		<CardInformation/>
	</div>
  );
}
