const { GoogleGenAI } = require("@google/genai");

async function analyze(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    const input = typeof req.body?.input === "string"
        ? req.body.input.trim()
        : "";

    if (!input) {
        res.status(400).json({ error: "Please describe your situation first." });
        return;
    }

    if (!process.env.GEMINI_API_KEY) {
        res.status(500).json({ error: "GEMINI_API_KEY is not configured." });
        return;
    }

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Provide clear, concise guidance about Indian government social-benefit schemes for this situation. Mention that eligibility must be verified on official websites.\n\nSituation: ${input}`
        });

        res.status(200).json({ result: response.text || "No guidance was returned." });
    } catch (error) {
        console.error("Gemini request failed:", error);
        res.status(502).json({ error: "The benefit assistant is temporarily unavailable." });
    }
}

module.exports = analyze;
