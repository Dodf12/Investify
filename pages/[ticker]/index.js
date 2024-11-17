// pages/[ticker].js
import { useRouter } from "next/router";

export default function TickerPage({ tickerData }) {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>{tickerData?.ticker || "Unknown Ticker"}</h1>
			<p>Sentiment Score: {tickerData?.data?.sentiment || "N/A"}</p>
			<div>
				<h2>Summary</h2>
				<p>{tickerData?.data?.summary?.summary || "No summary available."}</p>
			</div>
		</div>
	);
}

export async function getStaticProps({ params }) {
	const { ticker } = params;

	try {
		const res = await fetch('http://localhost:3000/api/fetch-data');
		const apiData = await res.json();

		if (!apiData.success || !apiData.data) {
			throw new Error("Failed to fetch data");
		}

		const tickerData = apiData.data.find((item) => item.ticker.toLowerCase() === ticker.toLowerCase());

		if (!tickerData) {
			return { notFound: true };
		}

		return {
			props: {
				tickerData, 
			},
		};
	} catch (error) {
		console.error("Error in getStaticProps:", error);

		return {
			notFound: true,
		};
	}
}
  
export async function getStaticPaths() {
    try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/fetch-data`);
		const apiData = await res.json();

		if (!apiData.success || !apiData.data) {
			throw new Error("Failed to fetch tickers");
		}
  

		const paths = apiData.data.map((item) => ({
			params: { ticker: item.ticker },
		}));
  
		return {
			paths,
			fallback: "blocking",
		};
    } catch (error) {
		console.error("Error in getStaticPaths:", error);
		
		return {
			paths: [],
			fallback: "blocking", 
		};
    }
}
  