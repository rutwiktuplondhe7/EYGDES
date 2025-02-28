const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDb = require("./config/connectionDB");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 3000;
connectDb();

// Ensure `public/images` exists
const uploadPath = "./public/images";
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

app.use(express.json());
app.use(cors());
app.use("/images", express.static("public/images"));

// Routes
app.use("/", require("./routes/user"));
app.use("/recipe", require("./routes/recipe"));

app.listen(PORT, (err) => {
    console.log(`Server running at :${PORT}`);
});
