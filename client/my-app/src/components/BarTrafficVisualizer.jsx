import {
	Bar,
	BarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

export default function BarTrafficVisualizer({ traffic }) {
	const chartData = [{ name: "Delay (ms)", value: traffic.delay_ms ?? 0 }];

	return (
		<div className="flex flex-col items-center justify-center p-4 bar-traffic">
			<div className="bar-traffic-info">
				<h2>Bar Traffic Chart Visualizer</h2>
				<p>
					Ցուցադրում է նորացված տվյալները՝ համապատասխանող տրաֆիկի ձգձգման
					արժեքներին (Delay ms):
				</p>
			</div>
			<ResponsiveContainer width={"100%"} height={200}>
				<BarChart data={chartData} barSize={30}>
					<XAxis dataKey="name" tick={{ fill: "#baff02", fontSize: 14 }} />
					<YAxis
						dataKey="value"
						tick={{ fill: "#baff02", fontSize: 14 }}
						domain={[0, 20]}
					/>
					<Tooltip />
					<Bar dataKey="value" fill="#8884d8" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
