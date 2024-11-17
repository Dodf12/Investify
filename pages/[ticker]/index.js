// pages/[ticker].js
import { useRouter } from "next/router";
import Header from "@/components/Header";

export default function TickerPage({ tickerData }) {
	const router = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Header currentPage={'home'}/>
		<div className="h-auto bg-white300 p-10 px-[10vw]">
			<h1 className="text-5xl font-medium text-blue-500">{tickerData?.ticker || "Unknown Ticker"}</h1>
			<p className="text-xl pb-10"> Sentiment Score: {(tickerData?.data?.sentiment * 100).toFixed(0) + "%"|| "N/A"}</p>
			<div>
				<h2 className="text-blue-500 font-regular text-2xl"><strong>Summary</strong></h2>
				<p className="py-8">{tickerData?.data?.summary?.summary || "No summary available."}</p>

				<h2 className="text-blue-500 font-regular text-2xl"><strong>Risk Insights</strong></h2>
				<p className="py-8">{tickerData?.data?.summary?.risk_insight || "No risk insights available."}</p>

				<h2 className="text-blue-500 font-regular text-2xl"><strong>Business Decisions</strong></h2>
				<p className="py-8">{tickerData?.data?.summary?.business_decisions || "No business decisions available."}</p>

				<h2 className="text-blue-500 font-regular text-2xl"><strong>High Risk Activities</strong></h2>
				<p className="py-8">{tickerData?.data?.summary?.high_risk_activities || "No high risk activities available."}</p>

				<h2 className="text-blue-500 font-regular text-2xl"><strong>Low Risk Activities</strong></h2>
				<p className="py-8">{tickerData?.data?.summary?.low_risk_activities || "No low risk activities available."}</p>
			</div>
		</div>
		</div>
	);
}

export async function getStaticProps({ params }) {
	const { ticker } = params;

	try {
		const res = await fetch('https://investify-ebon.vercel.app/api/fetch-data');
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
  