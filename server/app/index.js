import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: "http://localhost:3000", // адрес твоего React приложения
		methods: ["GET", "POST"],
	},
});

// Имитация данных (как будто с Cisco)
const trafficData = [
	{
		source: "PC0",
		destination: "Server0",
		protocol: "HTTP",
		status: "Success",
		delay_ms: 2,
	},
	{
		source: "PC1",
		destination: "Server0",
		protocol: "HTTP",
		status: "Success",
		delay_ms: 3,
	},
	{
		source: "PC2",
		destination: "Router0",
		protocol: "ICMP",
		status: "Timeout",
		delay_ms: null,
	},
	{
		source: "PC3",
		destination: "Server0",
		protocol: "FTP",
		status: "Success",
		delay_ms: 5,
	},
	{
		source: "PC4",
		destination: "Server0",
		protocol: "HTTP",
		status: "Error",
		delay_ms: 15,
	},
];

io.on("connection", (socket) => {
	console.log("Клиент подключился:", socket.id);

	setInterval(() => {
		const randomIndex = Math.floor(Math.random() * trafficData.length);
		const randomTraffic = trafficData[randomIndex];
		socket.emit("traffic", randomTraffic);
	}, 1000);

	socket.on("disconnect", () => {
		console.log("Клиент отключился:", socket.id);
	});
});

app.get("/", (req, res) => {
	res.send("Express сервер работает!");
});

httpServer.listen(4000, () => {
	console.log("🚀 Сервер запущен на http://localhost:4000");
});
