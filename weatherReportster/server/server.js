const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Hello from server!");
});

app.get("/api", (req, res) => {
	res.json({ message: "Hello from server!" });
});

app.listen("https://weather-reporter-rho.vercel.app/", () => {
	console.log("Server running on port 5000");
});
