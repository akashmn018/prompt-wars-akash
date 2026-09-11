const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const analyze = require("./lib/analyze");

const projectRoot = path.join(__dirname, "..");
dotenv.config({ path: path.join(projectRoot, ".env") });

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(projectRoot, "frontend")));
app.post("/api/analyze", analyze);

app.get("/", (req, res) => {
    res.sendFile(path.join(projectRoot, "frontend", "index.html"));
});
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = app;
