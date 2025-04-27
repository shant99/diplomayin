export default function InfoPanel({ traffic }) {
	return (
		<div className="flex flex-col items-center justify-center p-4 info-panel">
			<div className="info-panel-header">
				<h2 className="text-xl font-bold mb-4">Ընթացիկ տրաֆիկ</h2>
				<p>Current traffic</p>
			</div>
			<div className="mb-6 p-4 border rounded-lg shadow-md w-80 info-panel-rows">
				<p>
					<strong>
						Աղբյուր <span>(Source)</span>:
					</strong>{" "}
					<span>{traffic.source}</span>
				</p>
				<p>
					<strong>
						Նպատակակետ <span>(Target)</span>:
					</strong>{" "}
					<span>{traffic.destination}</span>
				</p>
				<p>
					<strong>
						Պրոտոկոլ <span>(Protocol)</span>:
					</strong>{" "}
					<span>{traffic.protocol}</span>
				</p>
				<p>
					<strong>
						Կարգավիճակ <span>(Status)</span>:
					</strong>{" "}
					<span>{traffic.status}</span>
				</p>
			</div>
		</div>
	);
}
