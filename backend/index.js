const express = require("express");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/postRoutes");
require("dotenv").config();


const PORT = process.env.PORT;
const app = express();


// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/posts", postRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
