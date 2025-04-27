import { useEffect, useState } from "react";
import AreaTrafficVisualizer from "./components/AreaTrafficVisualizer";
import BarTrafficVisualizer from "./components/BarTrafficVisualizer";
import Header from "./components/Header";
import InfoPanel from "./components/InfoPanel";
import trafficData from "./data";

export default function App() {
	const [currentTraffic, setCurrentTraffic] = useState(trafficData[0]);
	const [history, setHistory] = useState([]);

	useEffect(() => {
		const interval = setInterval(() => {
			const randomIndex = Math.floor(Math.random() * trafficData.length);
			const traffic = trafficData[randomIndex];

			setCurrentTraffic(traffic);
			setHistory((prev) => [
				...prev.slice(-9),
				{
					name: `${traffic.source} ➔ ${traffic.destination}`,
					delay: traffic.delay_ms ?? 0,
				},
			]);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-8 p-6 container">
			<Header />
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<InfoPanel traffic={currentTraffic} />
				<BarTrafficVisualizer traffic={currentTraffic} />
			</div>
			<AreaTrafficVisualizer history={history} />
		</div>
	);
}
