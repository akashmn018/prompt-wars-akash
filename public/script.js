// ==========================================
// SOCIAL BRIDGE - SCHEME FINDER
// ==========================================

const schemes = [
    {
        name: "Ayushman Bharat - PM-JAY",
        category: "healthcare",
        state: "all",
        benefit: "Health insurance cover up to ₹5 lakh per family per year",
        description:
            "Provides cashless hospitalization coverage for eligible poor and vulnerable families.",
        eligibility:
            "Eligibility is based on government beneficiary criteria and household circumstances.",
        documents: "Aadhaar / Government ID, address proof and other required documents",
        link: "https://www.myscheme.gov.in/hi/schemes/ab-pmjay"
    },

    {
        name: "Pradhan Mantri Awas Yojana - Urban",
        category: "housing",
        state: "all",
        benefit: "Support for eligible urban households to obtain a pucca house",
        description:
            "Government housing support for eligible urban households.",
        eligibility:
            "Income category and housing ownership conditions apply.",
        documents: "Aadhaar and other documents required by the scheme",
        link: "https://www.myscheme.gov.in/schemes/pmay-u"
    },

    {
        name: "Pradhan Mantri Garib Kalyan Anna Yojana",
        category: "food",
        state: "all",
        benefit: "Free foodgrains for eligible ration-card households",
        description:
            "Foodgrain support through the public distribution system.",
        eligibility:
            "Primarily for eligible AAY and Priority Household beneficiaries.",
        documents: "Ration card and other documents as required",
        link: "https://www.myscheme.gov.in/schemes/pm-gkay"
    },

    {
        name: "PM-KISAN",
        category: "agriculture",
        state: "all",
        benefit: "Income support for eligible farmer families",
        description:
            "Central government income-support scheme for eligible farmers.",
        eligibility:
            "Eligibility depends on PM-KISAN rules and exclusions.",
        documents: "Aadhaar, land and bank-related information as applicable",
        link: "https://www.myscheme.gov.in/schemes/pradhan-mantri-kisan-samman-nidhi"
    }
];


// ==========================================
// FIND ELEMENTS
// ==========================================

const locationInput =
    document.querySelector("#location") ||
    document.querySelector("#locationInput") ||
    document.querySelector("input[placeholder*='location' i]");


// ==========================================
// CATEGORY DETECTION
// ==========================================

function getCategory(element) {

    const text = element.innerText.toLowerCase();

    if (
        text.includes("health") ||
        text.includes("medical")
    ) {
        return "healthcare";
    }

    if (
        text.includes("housing") ||
        text.includes("home")
    ) {
        return "housing";
    }

    if (
        text.includes("food") ||
        text.includes("ration")
    ) {
        return "food";
    }

    if (
        text.includes("agriculture") ||
        text.includes("farmer")
    ) {
        return "agriculture";
    }

    if (
        text.includes("education") ||
        text.includes("student")
    ) {
        return "education";
    }

    if (
        text.includes("financial") ||
        text.includes("money")
    ) {
        return "financial";
    }

    return null;
}


// ==========================================
// SHOW SCHEMES
// ==========================================

function showSchemes(category) {

    const location =
        locationInput?.value.trim() || "India";

    const results = schemes.filter(scheme => {

        const categoryMatch =
            scheme.category === category;

        const stateMatch =
            scheme.state === "all" ||
            scheme.state.toLowerCase() === location.toLowerCase();

        return categoryMatch && stateMatch;
    });

    displayResults(results, location);
}


// ==========================================
// DISPLAY RESULTS
// ==========================================

function displayResults(results, location) {

    let container =
        document.querySelector("#schemeResults");

    if (!container) {

        container = document.createElement("div");

        container.id = "schemeResults";

        document.body.appendChild(container);
    }

    container.innerHTML = "";

    if (results.length === 0) {

        container.innerHTML = `
            <div>
                <h2>No schemes found</h2>
                <p>
                    We could not find a matching scheme for
                    ${location}.
                </p>
            </div>
        `;

        return;
    }

    const heading = document.createElement("div");

    heading.innerHTML = `
        <h2>Available Social Benefits</h2>
        <p>Location: ${location}</p>
    `;

    container.appendChild(heading);


    results.forEach((scheme, index) => {

        const card = document.createElement("div");

        card.className = "scheme-card";

        card.innerHTML = `
            <h3>${scheme.name}</h3>

            <p>
                <strong>Benefit:</strong>
                ${scheme.benefit}
            </p>

            <p>
                ${scheme.description}
            </p>

            <button onclick="viewScheme(${index})">
                View Details
            </button>
        `;

        container.appendChild(card);
    });


    // Store current results
    window.currentResults = results;

    container.scrollIntoView({
        behavior: "smooth"
    });
}


// ==========================================
// VIEW SCHEME DETAILS
// ==========================================

function viewScheme(index) {

    const scheme =
        window.currentResults[index];

    if (!scheme) return;

    const container =
        document.querySelector("#schemeResults");

    container.innerHTML = `

        <div class="scheme-details">

            <button onclick="location.reload()">
                ← Back
            </button>

            <h2>${scheme.name}</h2>

            <h3>Benefits</h3>
            <p>${scheme.benefit}</p>

            <h3>Description</h3>
            <p>${scheme.description}</p>

            <h3>Eligibility</h3>
            <p>${scheme.eligibility}</p>

            <h3>Documents Required</h3>
            <p>${scheme.documents}</p>

            <br>

            <a
                href="${scheme.link}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Apply / Check Official Details
            </a>

        </div>
    `;
}


// ==========================================
// MAKE CATEGORY CARDS CLICKABLE
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const elements =
        document.querySelectorAll(
            "button, .card, .category-card, .benefit-card, div"
        );

    elements.forEach(element => {

        const category =
            getCategory(element);

        if (!category) return;

        // Avoid attaching to large parent containers
        if (element.children.length > 5) return;

        element.addEventListener("click", () => {

            showSchemes(category);

        });

    });

});
function openEligibility() {
    window.location.href = "eligibility.html";
}