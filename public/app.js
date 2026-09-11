async function analyzeSituation() {

    const input =
        document.getElementById("userInput").value.trim();

    const button =
        document.getElementById("analyzeBtn");

    const loading =
        document.getElementById("loading");

    const resultSection =
        document.getElementById("resultSection");

    const result =
        document.getElementById("result");


    if (!input) {

        alert("Please describe your situation first.");

        return;
    }


    button.disabled = true;

    button.innerText = "Analyzing...";

    loading.style.display = "block";

    resultSection.style.display = "none";


    try {

        const response = await fetch("/api/analyze", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                input: input
            })

        });


        const data = await response.json();


        if (!response.ok) {

            throw new Error(
                data.error || "Something went wrong"
            );

        }


        result.innerText = data.result;

        resultSection.style.display = "block";


        resultSection.scrollIntoView({
            behavior: "smooth"
        });


    } catch (error) {

        alert(
            "Error: " + error.message
        );

    } finally {

        button.disabled = false;

        button.innerText =
            "✨ Analyze with Gemini";

        loading.style.display = "none";

    }

}