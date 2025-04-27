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
	{
		source: "PC1",
		destination: "PC3",
		protocol: "TCP",
		status: "Success",
		delay_ms: 1,
	},
	{
		source: "Router0",
		destination: "PC2",
		protocol: "ICMP",
		status: "Success",
		delay_ms: 8,
	},
	{
		source: "PC0",
		destination: "Server0",
		protocol: "HTTPS",
		status: "Success",
		delay_ms: 4,
	},
	{
		source: "PC2",
		destination: "Server0",
		protocol: "DNS",
		status: "Success",
		delay_ms: 6,
	},
	{
		source: "PC4",
		destination: "Router0",
		protocol: "ICMP",
		status: "Timeout",
		delay_ms: null,
	},
];

export default trafficData;
