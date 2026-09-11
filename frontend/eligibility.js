document
    .getElementById("eligibilityForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const age =
            Number(document.getElementById("age").value);

        const state =
            document.getElementById("state").value;

        const income =
            Number(document.getElementById("income").value);

        const occupation =
            document.getElementById("occupation").value;

        const category =
            document.getElementById("category").value;


        let scheme = "";
        let benefit = "";


        // Healthcare
        if (category === "Healthcare") {

            scheme = "Ayushman Bharat - PM-JAY";

            benefit =
                "Health coverage for eligible beneficiaries, subject to official government eligibility criteria.";

        }


        // Education
        else if (category === "Education") {

            scheme = "Education Scholarship Schemes";

            benefit =
                "Scholarship and educational assistance may be available depending on student eligibility.";

        }


        // Agriculture
        else if (category === "Agriculture") {

            scheme = "PM-KISAN";

            benefit =
                "Income support for eligible farmer families, subject to scheme rules.";

        }


        // Housing
        else if (category === "Housing") {

            scheme = "Pradhan Mantri Awas Yojana";

            benefit =
                "Housing assistance may be available for eligible households.";

        }


        // Financial
        else if (category === "Financial Support") {

            scheme = "Government Financial Assistance Schemes";

            benefit =
                "Various financial assistance programs may be available depending on eligibility.";

        }


        document.getElementById("result").innerHTML = `

            <div class="scheme-card">

                <h2>Recommended Scheme</h2>

                <h3>${scheme}</h3>

                <p>
                    <strong>Your Details</strong>
                </p>

                <p>
                    Age: ${age}
                </p>

                <p>
                    State: ${state}
                </p>

                <p>
                    Annual Income: ₹${income}
                </p>

                <p>
                    Occupation: ${occupation}
                </p>

                <p>
                    Category: ${category}
                </p>

                <hr>

                <p>
                    <strong>Possible Benefit:</strong>
                </p>

                <p>
                    ${benefit}
                </p>

                <p>
                    ⚠️ Final eligibility is determined by the
                    official government scheme rules.
                </p>

                <a
                    href="https://www.myscheme.gov.in/"
                    target="_blank"
                >
                    Check Official Details
                </a>

            </div>
        `;

    });