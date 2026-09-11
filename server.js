const express = require("express");
const dotenv = require("dotenv");
const analyze = require("./lib/analyze");

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));
app.post("/api/analyze", analyze);

app.get("/", (req, res) => {
    res.send("Social Bridge Server is Running!");
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;
