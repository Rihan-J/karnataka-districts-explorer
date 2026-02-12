// 1. DATA: Complete District Data
const districtsData = {
    "Bagalkot": {
        name: "Bagalkot",
        population: "1,890,826",
        area: "6,593 km²",
        description: "Known for its rich historical heritage and ancient cave temples, Bagalkot is located in northern Karnataka.",
        wikipedia: "https://en.wikipedia.org/wiki/Bagalkot_district",
        famousPlaces: [
            { name: "Badami Caves", type: "Historical" },
            { name: "Pattadakal", type: "UNESCO Site" },
            { name: "Aihole", type: "Historical" }
        ]
    },
    "Bangalore Urban": {
        name: "Bangalore Urban",
        population: "9,621,551",
        area: "2,190 km²",
        description: "The capital city of Karnataka, known as the Silicon Valley of India. A major hub for technology and innovation.",
        wikipedia: "https://en.wikipedia.org/wiki/Bangalore_Urban_district",
        famousPlaces: [
            { name: "Lalbagh Garden", type: "Nature" },
            { name: "Bangalore Palace", type: "Historical" },
            { name: "Vidhana Soudha", type: "Architecture" }
        ]
    },
    "Bangalore Rural": {
        name: "Bangalore Rural",
        population: "990,923",
        area: "2,259 km²",
        description: "Surrounding the capital city, known for its sericulture, agriculture, and the birthplace of Kempegowda.",
        wikipedia: "https://en.wikipedia.org/wiki/Bangalore_Rural_district",
        famousPlaces: [
            { name: "Nandi Hills", type: "Nature" },
            { name: "Devanahalli Fort", type: "Historical" },
            { name: "Grover Vineyards", type: "Tourist" }
        ]
    },
    "Belgaum": {
        name: "Belgaum (Belagavi)",
        population: "4,779,661",
        area: "13,415 km²",
        description: "The second capital of Karnataka during winter sessions. Known for its diverse culture and sweet 'Kunda'.",
        wikipedia: "https://en.wikipedia.org/wiki/Belagavi_district",
        famousPlaces: [
            { name: "Gokak Falls", type: "Nature" },
            { name: "Belgaum Fort", type: "Historical" },
            { name: "Suvarna Soudha", type: "Architecture" }
        ]
    },
    "Bellary": {
        name: "Bellary (Ballari)",
        population: "2,452,595",
        area: "8,447 km²",
        description: "Known for its iron ore deposits and historical significance. Close to Hampi.",
        wikipedia: "https://en.wikipedia.org/wiki/Ballari_district",
        famousPlaces: [
            { name: "Bellary Fort", type: "Historical" },
            { name: "Tungabhadra Dam", type: "Tourist" },
            { name: "Sandur Hills", type: "Nature" }
        ]
    },
    "Bidar": {
        name: "Bidar",
        population: "1,703,300",
        area: "5,448 km²",
        description: "Famous for its Bidar Fort and unique Bidriware handicrafts with Persian influence.",
        wikipedia: "https://en.wikipedia.org/wiki/Bidar_district",
        famousPlaces: [
            { name: "Bidar Fort", type: "Historical" },
            { name: "Nanak Jhira Sahib", type: "Religious" },
            { name: "Bahmani Tombs", type: "Historical" }
        ]
    },
    "Chamarajanagar": {
        name: "Chamarajanagar",
        population: "1,020,791",
        area: "5,685 km²",
        description: "Home to the famous Bandipur National Park and Male Mahadeshwara Hills.",
        wikipedia: "https://en.wikipedia.org/wiki/Chamarajanagar_district",
        famousPlaces: [
            { name: "Bandipur National Park", type: "Wildlife" },
            { name: "MM Hills", type: "Religious" },
            { name: "BR Hills", type: "Wildlife" }
        ]
    },
    "Chikkaballapur": {
        name: "Chikkaballapur",
        population: "1,255,104",
        area: "4,244 km²",
        description: "Known for grape cultivation, silk, and historic hill stations.",
        wikipedia: "https://en.wikipedia.org/wiki/Chikkaballapur_district",
        famousPlaces: [
            { name: "Nandi Hills", type: "Nature" },
            { name: "Skandagiri", type: "Adventure" },
            { name: "Bhoga Nandeeshwara", type: "Religious" }
        ]
    },
    "Chikmagalur": {
        name: "Chikmagalur",
        population: "1,137,961",
        area: "7,201 km²",
        description: "The coffee land of Karnataka, known for its scenic beauty, hills, and coffee plantations.",
        wikipedia: "https://en.wikipedia.org/wiki/Chikmagalur_district",
        famousPlaces: [
            { name: "Mullayanagiri", type: "Nature" },
            { name: "Baba Budangiri", type: "Religious" },
            { name: "Kudremukh", type: "Wildlife" }
        ]
    },
    "Chitradurga": {
        name: "Chitradurga",
        population: "1,659,456",
        area: "8,440 km²",
        description: "Famous for the massive Chitradurga Fort and the legendary story of Onake Obavva.",
        wikipedia: "https://en.wikipedia.org/wiki/Chitradurga_district",
        famousPlaces: [
            { name: "Chitradurga Fort", type: "Historical" },
            { name: "Vani Vilas Sagar", type: "Tourist" },
            { name: "Chandravalli Caves", type: "Historical" }
        ]
    },
    "Dakshina Kannada": {
        name: "Dakshina Kannada",
        population: "2,089,649",
        area: "4,559 km²",
        description: "Coastal district known for Mangalore city, diverse cuisine, temples, and beautiful beaches.",
        wikipedia: "https://en.wikipedia.org/wiki/Dakshina_Kannada_district",
        famousPlaces: [
            { name: "Panambur Beach", type: "Nature" },
            { name: "Kadri Temple", type: "Religious" },
            { name: "St. Aloysius Chapel", type: "Religious" }
        ]
    },
    "Davanagere": {
        name: "Davanagere",
        population: "1,945,497",
        area: "5,926 km²",
        description: "Known as the 'Manchester of Karnataka' for textiles and famous for Benne Dose.",
        wikipedia: "https://en.wikipedia.org/wiki/Davanagere_district",
        famousPlaces: [
            { name: "Kunduvada Kere", type: "Nature" },
            { name: "Harihar Fort", type: "Historical" },
            { name: "Shantisagara", type: "Tourist" }
        ]
    },
    "Dharwad": {
        name: "Dharwad",
        population: "1,847,023",
        area: "4,260 km²",
        description: "Educational and cultural hub known for its classical music tradition and Dharwad Peda.",
        wikipedia: "https://en.wikipedia.org/wiki/Dharwad_district",
        famousPlaces: [
            { name: "Unkal Lake", type: "Nature" },
            { name: "Chandramouleshwara", type: "Religious" },
            { name: "Indira Glass House", type: "Tourist" }
        ]
    },
    "Gadag": {
        name: "Gadag",
        population: "1,064,570",
        area: "4,656 km²",
        description: "Known for its rich heritage of Chalukyan temples and historical monuments.",
        wikipedia: "https://en.wikipedia.org/wiki/Gadag_district",
        famousPlaces: [
            { name: "Trikuteshwara Temple", type: "Historical" },
            { name: "Lakkundi", type: "Historical" },
            { name: "Veeranarayana Temple", type: "Religious" }
        ]
    },
    "Gulbarga": {
        name: "Gulbarga (Kalaburagi)",
        population: "2,566,326",
        area: "10,951 km²",
        description: "Known for its Bahmani architecture and the famous Khwaja Banda Nawaz Dargah.",
        wikipedia: "https://en.wikipedia.org/wiki/Kalaburagi_district",
        famousPlaces: [
            { name: "Gulbarga Fort", type: "Historical" },
            { name: "Banda Nawaz Dargah", type: "Religious" },
            { name: "Buddha Vihar", type: "Religious" }
        ]
    },
    "Hassan": {
        name: "Hassan",
        population: "1,776,421",
        area: "6,826 km²",
        description: "Gateway to the famous Hoysala architecture at Belur and Halebidu.",
        wikipedia: "https://en.wikipedia.org/wiki/Hassan_district",
        famousPlaces: [
            { name: "Belur Temple", type: "UNESCO Site" },
            { name: "Halebidu Temple", type: "UNESCO Site" },
            { name: "Shravanabelagola", type: "Religious" }
        ]
    },
    "Haveri": {
        name: "Haveri",
        population: "1,597,668",
        area: "4,851 km²",
        description: "Known for its temples, Byadgi chillies, and historical monuments.",
        wikipedia: "https://en.wikipedia.org/wiki/Haveri_district",
        famousPlaces: [
            { name: "Siddhesvara Temple", type: "Historical" },
            { name: "Bankapura Fort", type: "Historical" },
            { name: "Magod Falls", type: "Nature" }
        ]
    },
    "Kodagu": {
        name: "Kodagu (Coorg)",
        population: "554,519",
        area: "4,102 km²",
        description: "The 'Scotland of India', known for coffee plantations, misty hills, and warrior culture.",
        wikipedia: "https://en.wikipedia.org/wiki/Kodagu_district",
        famousPlaces: [
            { name: "Abbey Falls", type: "Nature" },
            { name: "Raja's Seat", type: "Tourist" },
            { name: "Talakaveri", type: "Religious" }
        ]
    },
    "Kolar": {
        name: "Kolar",
        population: "1,536,401",
        area: "8,223 km²",
        description: "Famous for the now-defunct Kolar Gold Fields (KGF) and ancient temples.",
        wikipedia: "https://en.wikipedia.org/wiki/Kolar_district",
        famousPlaces: [
            { name: "Kolaramma Temple", type: "Religious" },
            { name: "KGF", type: "Historical" },
            { name: "Anthargange", type: "Adventure" }
        ]
    },
    "Koppal": {
        name: "Koppal",
        population: "1,389,920",
        area: "7,190 km²",
        description: "Known for its historical sites, Kinhal toys, and proximity to Hampi.",
        wikipedia: "https://en.wikipedia.org/wiki/Koppal_district",
        famousPlaces: [
            { name: "Koppal Fort", type: "Historical" },
            { name: "Mahadeva Temple", type: "Religious" },
            { name: "Anegundi", type: "Historical" }
        ]
    },
    "Mandya": {
        name: "Mandya",
        population: "1,805,769",
        area: "4,961 km²",
        description: "The 'Sugar Bowl of Karnataka', known for the KRS Dam and Srirangapatna.",
        wikipedia: "https://en.wikipedia.org/wiki/Mandya_district",
        famousPlaces: [
            { name: "KRS Dam", type: "Tourist" },
            { name: "Srirangapatna", type: "Historical" },
            { name: "Ranganathittu", type: "Wildlife" }
        ]
    },
    "Mysore": {
        name: "Mysore (Mysuru)",
        population: "3,001,127",
        area: "6,854 km²",
        description: "The Cultural Capital of Karnataka, famous for the Mysore Palace and Dasara festivities.",
        wikipedia: "https://en.wikipedia.org/wiki/Mysore_district",
        famousPlaces: [
            { name: "Mysore Palace", type: "Historical" },
            { name: "Chamundi Hills", type: "Religious" },
            { name: "Brindavan Gardens", type: "Nature" }
        ]
    },
    "Raichur": {
        name: "Raichur",
        population: "1,928,812",
        area: "8,389 km²",
        description: "Located between Krishna and Tungabhadra rivers, known for its fort and thermal plant.",
        wikipedia: "https://en.wikipedia.org/wiki/Raichur_district",
        famousPlaces: [
            { name: "Raichur Fort", type: "Historical" },
            { name: "Maski", type: "Historical" },
            { name: "Mudgal Fort", type: "Historical" }
        ]
    },
    "Ramanagara": {
        name: "Ramanagara",
        population: "1,082,636",
        area: "3,576 km²",
        description: "Known for sericulture (Silk City) and the rocky terrain where 'Sholay' was filmed.",
        wikipedia: "https://en.wikipedia.org/wiki/Ramanagara_district",
        famousPlaces: [
            { name: "Ramadevara Betta", type: "Adventure" },
            { name: "Mekedatu", type: "Nature" },
            { name: "Janapada Loka", type: "Cultural" }
        ]
    },
    "Shimoga": {
        name: "Shimoga (Shivamogga)",
        population: "1,755,512",
        area: "8,477 km²",
        description: "Gateway to the Malnad region, known for dense forests and magnificent waterfalls.",
        wikipedia: "https://en.wikipedia.org/wiki/Shimoga_district",
        famousPlaces: [
            { name: "Jog Falls", type: "Nature" },
            { name: "Agumbe", type: "Nature" },
            { name: "Sakrebailu Camp", type: "Wildlife" }
        ]
    },
    "Tumkur": {
        name: "Tumkur (Tumakuru)",
        population: "2,678,980",
        area: "10,598 km²",
        description: "Known as the 'Coconut City' and a major educational and industrial hub.",
        wikipedia: "https://en.wikipedia.org/wiki/Tumkur_district",
        famousPlaces: [
            { name: "Devarayanadurga", type: "Nature" },
            { name: "Siddaganga Mutt", type: "Religious" },
            { name: "Madhugiri Monolith", type: "Adventure" }
        ]
    },
    "Udupi": {
        name: "Udupi",
        population: "1,177,908",
        area: "3,575 km²",
        description: "Temple town famous for Sri Krishna Temple, pristine beaches, and distinct cuisine.",
        wikipedia: "https://en.wikipedia.org/wiki/Udupi_district",
        famousPlaces: [
            { name: "Krishna Temple", type: "Religious" },
            { name: "Malpe Beach", type: "Nature" },
            { name: "St. Mary's Island", type: "Nature" }
        ]
    },
    "Uttara Kannada": {
        name: "Uttara Kannada",
        population: "1,437,169",
        area: "10,291 km²",
        description: "Coastal district with the highest forest cover in the state, beaches, and waterfalls.",
        wikipedia: "https://en.wikipedia.org/wiki/Uttara_Kannada_district",
        famousPlaces: [
            { name: "Gokarna Beach", type: "Nature" },
            { name: "Murudeshwar", type: "Religious" },
            { name: "Dandeli", type: "Adventure" }
        ]
    },
    "Vijayapura": {
        name: "Vijayapura (Bijapur)",
        population: "2,177,331",
        area: "10,541 km²",
        description: "Historic city known for the Gol Gumbaz and Adil Shahi architectural heritage.",
        wikipedia: "https://en.wikipedia.org/wiki/Vijayapura_district",
        famousPlaces: [
            { name: "Gol Gumbaz", type: "Historical" },
            { name: "Ibrahim Rauza", type: "Historical" },
            { name: "Bara Kaman", type: "Historical" }
        ]
    },
    "Yadgir": {
        name: "Yadgir",
        population: "1,172,985",
        area: "5,234 km²",
        description: "Known for its hill forts, historical significance, and uranium deposits.",
        wikipedia: "https://en.wikipedia.org/wiki/Yadgir_district",
        famousPlaces: [
            { name: "Yadgir Fort", type: "Historical" },
            { name: "Narayanpur Dam", type: "Tourist" },
            { name: "Shorapur", type: "Historical" }
        ]
    },
    "Vijayanagara": {
        name: "Vijayanagara",
        population: "1,135,777",
        area: "6,589 km²",
        description: "Newest district, home to Hampi, the UNESCO World Heritage Site of the ancient empire.",
        wikipedia: "https://en.wikipedia.org/wiki/Vijayanagara_district",
        famousPlaces: [
            { name: "Hampi Monuments", type: "UNESCO Site" },
            { name: "Virupaksha Temple", type: "Religious" },
            { name: "Lotus Mahal", type: "Historical" }
        ]
    }
};

// 2. MAPPING: SVG Text Labels to Data Keys
// This normalizes variations in SVG text (case, newlines) to our Data Keys.
const districtNameMapping = {
    "bagalkot": "Bagalkot",
    "bagalkote": "Bagalkot",
    "bangalore urban": "Bangalore Urban",
    "bengaluru urban": "Bangalore Urban",
    "urban": "Bangalore Urban", // In case text is split
    "bangalore rural": "Bangalore Rural",
    "bengaluru rural": "Bangalore Rural",
    "rural": "Bangalore Rural",
    "belgaum": "Belgaum",
    "belagavi": "Belgaum",
    "ballari": "Bellary",
    "bellary": "Bellary",
    "bidar": "Bidar",
    "chamarajanagar": "Chamarajanagar",
    "chamarajanagara": "Chamarajanagar",
    "chikkaballapur": "Chikkaballapur",
    "chikkaballapura": "Chikkaballapur",
    "chikmagalur": "Chikmagalur",
    "chikkamagaluru": "Chikmagalur",
    "chitradurga": "Chitradurga",
    "dakshina kannada": "Dakshina Kannada",
    "dakshina": "Dakshina Kannada",
    "davanagere": "Davanagere",
    "davangere": "Davanagere",
    "dharwad": "Dharwad",
    "gadag": "Gadag",
    "gulbarga": "Gulbarga",
    "kalaburagi": "Gulbarga",
    "hassan": "Hassan",
    "haveri": "Haveri",
    "kodagu": "Kodagu",
    "coorg": "Kodagu",
    "kolar": "Kolar",
    "koppal": "Koppal",
    "mandya": "Mandya",
    "mysore": "Mysore",
    "mysuru": "Mysore",
    "raichur": "Raichur",
    "ramanagara": "Ramanagara",
    "shimoga": "Shimoga",
    "shivamogga": "Shimoga",
    "tumkur": "Tumkur",
    "tumakuru": "Tumkur",
    "udupi": "Udupi",
    "uttara kannada": "Uttara Kannada",
    "uttara": "Uttara Kannada",
    "vijayapura": "Vijayapura",
    "bijapur": "Vijayapura",
    "yadgir": "Yadgir",
    "vijayanagara": "Vijayanagara"
};

// Global variables
let selectedDistrict = null;
const districtElements = new Map(); // Stores { districtKey: { text: Element, paths: [Element] } }

// 3. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    loadSVGMap();
});

// 4. LOAD SVG (The Fetch Function)
async function loadSVGMap() {
    try {
        const response = await fetch('Karnataka_districts_map.svg');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const svgText = await response.text();

        // Parse and Inject
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
        const svgElement = svgDoc.querySelector('svg');

        if (!svgElement) {
            throw new Error("No SVG element found in file");
        }

        // Clean existing IDs to prevent conflicts and ensure full width
        svgElement.removeAttribute('width');
        svgElement.removeAttribute('height');
        svgElement.setAttribute('width', '100%');
        svgElement.setAttribute('height', '100%');

        const mapContainer = document.getElementById('map-wrapper');
        mapContainer.innerHTML = ''; // Clear loading spinner
        mapContainer.appendChild(svgElement);

        // Process the SVG (Link paths to data)
        processSVG(svgElement);

    } catch (error) {
        console.error('Error loading SVG:', error);
        document.getElementById('map-wrapper').innerHTML = `
            <div style="color: #ff6b6b; text-align: center; padding: 2rem;">
                <h3>Error Loading Map</h3>
                <p>${error.message}</p>
                <p style="font-size: 0.9em; margin-top: 1rem; color: #b4b9c9;">
                   <strong>Note:</strong> Since this uses <code>fetch()</code>, you must run this file on a local server (like Live Server, XAMPP, or Python http.server). 
                   You cannot simply double-click the HTML file.
                </p>
            </div>
        `;
    }
}

// 5. PROCESS SVG: Link Text Labels to Map Paths
function processSVG(svg) {
    const paths = Array.from(svg.querySelectorAll('path, polygon')); // Get all shapes
    const texts = Array.from(svg.querySelectorAll('text'));

    // Step A: Identify District Text Labels
    const textToDistrict = new Map(); // Map<TextElement, DistrictKey>

    texts.forEach(textEl => {
        // Clean the text: lower case, remove extra spaces, join tspan lines
        const rawText = textEl.textContent.replace(/[\n\r\s]+/g, ' ').trim().toLowerCase();

        if (districtNameMapping[rawText]) {
            const districtKey = districtNameMapping[rawText];
            textToDistrict.set(textEl, districtKey);

            // Style the text
            textEl.style.cursor = 'pointer';
            textEl.classList.add('map-text'); // For CSS hover effects

            // Add click listener to text
            textEl.addEventListener('click', (e) => {
                e.stopPropagation();
                selectDistrict(districtKey);
            });

            // Initialize storage
            if (!districtElements.has(districtKey)) {
                districtElements.set(districtKey, { text: textEl, paths: [] });
            }
        }
    });

    // Step B: Associate Paths with Districts (Geometry matching)
    // We find the closest text label center to the path center
    paths.forEach(path => {
        const bbox = path.getBBox();

        // Filter out tiny artifacts or huge background rectangles
        // (Adjust these thresholds based on your specific SVG if needed)
        const svgBox = svg.viewBox.baseVal;
        if ((bbox.width > svgBox.width * 0.95) || (bbox.width < 5 && bbox.height < 5)) return;

        const pathCenterX = bbox.x + bbox.width / 2;
        const pathCenterY = bbox.y + bbox.height / 2;

        let closestDistrict = null;
        let minDistance = Infinity;

        textToDistrict.forEach((districtKey, textEl) => {
            const textBBox = textEl.getBBox();
            const textX = textBBox.x + textBBox.width / 2;
            const textY = textBBox.y + textBBox.height / 2;

            const dist = Math.sqrt(
                Math.pow(pathCenterX - textX, 2) +
                Math.pow(pathCenterY - textY, 2)
            );

            if (dist < minDistance) {
                minDistance = dist;
                closestDistrict = districtKey;
            }
        });

        // Threshold: If the closest text is too far, it's probably not related
        // (Value 200 is arbitrary, adjust if paths aren't linking)
        if (closestDistrict && minDistance < 300) {
            // Link path to district
            if (districtElements.has(closestDistrict)) {
                districtElements.get(closestDistrict).paths.push(path);
            }

            // Style and Events
            path.classList.add('map-path');
            path.style.cursor = 'pointer';
            path.style.transition = 'all 0.3s ease';

            // Initial fill (transparent/default)
            if (!path.style.fill) {
                path.style.fill = 'rgba(255, 193, 7, 0.1)';
            }
            path.style.stroke = 'rgba(255, 193, 7, 0.3)';

            path.addEventListener('click', (e) => {
                e.stopPropagation();
                selectDistrict(closestDistrict);
            });

            path.addEventListener('mouseenter', () => {
                if (selectedDistrict !== closestDistrict) {
                    path.style.fill = 'rgba(255, 193, 7, 0.4)';
                }
            });

            path.addEventListener('mouseleave', () => {
                if (selectedDistrict !== closestDistrict) {
                    path.style.fill = 'rgba(255, 193, 7, 0.1)';
                }
            });
        }
    });
}

// 6. INTERACTION: Select District
function selectDistrict(districtKey) {
    const data = districtsData[districtKey];
    if (!data) return;

    // Reset visual state of previously selected
    if (selectedDistrict && districtElements.has(selectedDistrict)) {
        const prevEls = districtElements.get(selectedDistrict);
        prevEls.paths.forEach(p => {
            p.style.fill = 'rgba(255, 193, 7, 0.1)';
            p.classList.remove('active');
        });
        if (prevEls.text) prevEls.text.style.fill = '';
    }

    // Set new selection
    selectedDistrict = districtKey;

    // Highlight new selection
    if (districtElements.has(districtKey)) {
        const currEls = districtElements.get(districtKey);
        currEls.paths.forEach(p => {
            p.style.fill = '#D32F2F'; // Karnataka Red
            p.classList.add('active');
        });
        // Optional: Highlight text
        // if (currEls.text) currEls.text.style.fill = '#fff'; 
    }

    updateInfoPanel(data);
}

// 7. UI UPDATE
function updateInfoPanel(data) {
    const infoContent = document.getElementById('info-content');

    infoContent.innerHTML = `
        <div class="fade-in">
            <h2>${data.name}</h2>
            
            <div class="district-details">
                <div class="detail-item">
                    <span class="detail-label">Population</span>
                    <span class="detail-value">${data.population}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Area</span>
                    <span class="detail-value">${data.area}</span>
                </div>
            </div>
            
            <h3 class="section-title">About</h3>
            <p class="description">${data.description}</p>
            
            ${data.wikipedia ? `
                <a href="${data.wikipedia}" target="_blank" rel="noopener noreferrer" class="wikipedia-link">
                    <svg class="wiki-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.24-1.122-.271C.103 5.033 0 4.982 0 4.898v-.455l.052-.045c.924-.005 5.401 0 5.401 0l.051.045v.434c0 .119-.075.176-.225.176l-.564.031c-.485.029-.727.164-.727.436 0 .135.053.33.166.601 1.082 2.646 4.818 10.521 5.004 10.951.16-.281 1.792-3.256 3.431-6.289-1.397-2.867-2.246-4.56-2.246-4.56-.195-.435-.314-.693-.413-.904-.1-.226-.16-.314-.328-.344-.131-.01-.587-.037-1.058-.037-.035 0-.052-.086-.052-.258l.051-.044c.738-.005 3.632 0 3.632 0l.051.045v.434c0 .119-.075.176-.225.176l-.564.031c-.485.029-.727.164-.727.436 0 .135.053.33.166.601.633 1.569 1.738 4.051 2.214 5.217.477-1.166 1.582-3.648 2.215-5.217.113-.271.166-.466.166-.601 0-.272-.242-.407-.727-.436l-.564-.031c-.15 0-.225-.057-.225-.176v-.434l.051-.045s2.894-.005 3.632 0l.051.044c0 .172-.017.258-.052.258-.471 0-.927.027-1.058.037-.168.03-.228.118-.328.344-.099.211-.218.469-.413.904 0 0-1.183 2.36-2.606 5.195 2.201 4.229 4.332 8.307 4.332 8.307.281.569.567.87.861.915.289.09 1.047.09 1.334.09.119 0 .178.076.178.226v.46l-.051.043h-3.88c-.119-.004-1.324-.004-1.324-.004l-.051-.043v-.426c0-.15.059-.226.18-.226.359 0 .592-.016.699-.041.181-.031.181-.15.029-.361-.569-1.074-1.755-3.334-2.853-5.728l-.374.723c-.28.547-.605 1.228-.856 1.717-.225.436-.345.707-.435.871-.061.119-.104.226-.135.316-.031.09-.052.15-.052.181 0 .271.242.406.727.436l.564.031c.15 0 .225.057.225.176v.434l-.051.045h-5.401l-.052-.045v-.455c0-.084.103-.135.31-.158.567-.031.94-.121 1.122-.271.178-.152.368-.538.619-1.139z"/>
                    </svg>
                    Learn more on Wikipedia
                </a>
            ` : ''}
            
            <h3 class="section-title">Famous Places</h3>
            <div class="places-grid">
                ${data.famousPlaces.map(place => `
                    <div class="place-card">
                        <div class="place-name">${place.name}</div>
                        <span class="place-type">${place.type}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Auto-scroll to info panel on mobile devices
    if (window.innerWidth < 1024) {
        const infoPanel = document.querySelector('.info-panel');
        if (infoPanel) {
            setTimeout(() => {
                infoPanel.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
}