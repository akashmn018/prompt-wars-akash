const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Social Bridge Server is Running!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
