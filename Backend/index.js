const express = require("express");
const path = require("path");

const imageRoutes = require("./routes/imageRoutes");

const app = express();

// static (optional — only if needed elsewhere)
app.use("/public", express.static(path.join(__dirname, "public")));

// Routes
app.use("/images", imageRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000 🚀");
});
