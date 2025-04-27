import React, { useEffect, useState } from "react";
import {
	Area,
	AreaChart,
	CartesianGrid,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";
import trafficData from "../data";

export default function App() {
	const [history, setHistory] = useState([]);

	useEffect(() => {
		const interval = setInterval(() => {
			const randomIndex = Math.floor(Math.random() * trafficData.length);
			const traffic = trafficData[randomIndex];

			setHistory((prev) => [
				...prev.slice(-9),
				{
					name: `${traffic.source} ➔ ${traffic.destination}`,
					delay: traffic.delay_ms !== null ? traffic.delay_ms : 0,
				},
			]);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div class="area-traffic">
			<div className="area-traffic-info">
				<h2>Area Traffic Chart Visualizer</h2>
				<p>
					Իրական ժամանակում վիզուալացնում է ցանցային բեռնվածության ձգձգման
					տվյալները AreaChart-ի միջոցով:
				</p>
			</div>
			<AreaChart
				width={900}
				height={400}
				data={history.length > 0 ? history : [{ name: "нет данных", delay: 0 }]}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" tick={{ fill: "#baff02", fontSize: 14 }} />
				<YAxis tick={{ fill: "#baff02", fontSize: 14 }} domain={[0, 20]} />
				<Tooltip />
				<Area type="monotone" dataKey="delay" stroke="#8884d8" fill="#8884d8" />
			</AreaChart>
		</div>
	);
}
