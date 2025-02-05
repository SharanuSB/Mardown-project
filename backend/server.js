const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", routes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
