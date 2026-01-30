// ROVE Survey System - Admin Panel Logic with API

document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    initLoginForm();
    initLogout();
    initTabs();
});

// ===== Authentication =====
async function checkAuth() {
    try {
        const response = await fetch('/api/auth/check', {
            credentials: 'same-origin'
        });
        const data = await response.json();
        
        if (data.authenticated) {
            showDashboard();
            loadStats();
            loadResponses();
        } else {
            showLogin();
        }
    } catch (error) {
        console.error('Auth check failed:', error);
        showLogin();
    }
}

function showLogin() {
    document.getElementById('login-screen').classList.remove('hidden');
    document.getElementById('admin-dashboard').classList.add('hidden');
}

function showDashboard() {
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('admin-dashboard').classList.remove('hidden');
}

function initLoginForm() {
    const form = document.getElementById('login-form');
    const errorDiv = document.getElementById('login-error');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'same-origin',
                body: JSON.stringify({ username, password })
            });
            
            const data = await response.json();
            
            if (data.success) {
                errorDiv.classList.add('hidden');
                showDashboard();
                loadStats();
                loadResponses();
            } else {
                errorDiv.textContent = data.error || 'Login failed';
                errorDiv.classList.remove('hidden');
            }
        } catch (error) {
            errorDiv.textContent = 'Connection error. Please try again.';
            errorDiv.classList.remove('hidden');
        }
    });
}

function initLogout() {
    document.getElementById('logout-btn').addEventListener('click', async function() {
        try {
            await fetch('/api/auth/logout', { method: 'POST', credentials: 'same-origin' });
        } catch (error) {
            console.error('Logout error:', error);
        }
        showLogin();
    });
}

// Question labels for display
const empathyQuestions = {
    e_q1: "Where do you typically find travel inspiration?",
    e_q1_other: "Other source (specified)",
    e_q2: "How do you feel when you cannot easily book what you see online?",
    e_q3: "What visual elements make a travel video feel authentic?",
    e_q4: "How much time do you spend verifying social media trends?",
    e_q5: "Have you felt socially isolated while traveling?",
    e_q6_1: "Fear #1 when joining group travel",
    e_q6_2: "Fear #2 when joining group travel",
    e_q6_3: "Fear #3 when joining group travel",
    e_q7: "Trust in algorithm vs choosing travel companions yourself",
    e_q8: "Skill you would want to learn in a life swap",
    e_q9: "Skills vs landmarks priority",
    e_q10: "What cultural empathy means to you",
    e_q11: "Does Sunset gradient feel authentic for Asian travel?",
    e_q12: "Does Glassmorphism help you focus?",
    e_q13: "What makes an app feel too AI-generated?",
    e_q14: "Does 'Tribe' feel inclusive?",
    e_q14_other: "Preferred alternative name",
    e_q15: "How much does host profile/reviews influence booking?",
    e_q16: "Data needed for Kindred Hosting (house-swapping)",
    e_q17: "Willingness to be public face for discounts",
    e_q18_ranking: "Feature Ranking"
};

const quantitativeQuestions = {
    q_q1: "Email address",
    q_q2: "Age bracket",
    q_q3: "Current primary status",
    q_q3_other: "Other status (specified)",
    q_q4: "Travel Anxiety or loneliness when planning solo",
    q_q5: "Biggest fears regarding group travel",
    q_q6: "Typical travel energy level",
    q_q7: "Where do you find travel inspiration?",
    q_q8: "Is TikTok style convenient for discovery?",
    q_q9: "Main driver for week-long stay in new city",
    q_q10: "Most likely immersive experience to book",
    q_q11: "Must-have info on host's profile",
    q_q12: "Data needed for Kindred Hosting",
    q_q13: "Consumer info to integrate in travel profile",
    q_q14: "Importance of removing English in localized app",
    q_q15: "Willingness to pay Tribe Matching Fee",
    q_q16: "Interest in becoming Head Rover",
    q_q17_ranking: "Feature Ranking"
};

const valueLabels = {
    // Common values
    yes: "Yes",
    no: "No",
    
    // Q1 options
    tiktok: "TikTok",
    instagram: "Instagram",
    blogs_youtube: "Travel Blogs / YouTube",
    tiktok_instagram: "TikTok / Instagram",
    google: "Google Search",
    friends: "Recommendations from friends",
    other: "Other",
    
    // Q4 options
    less_30min: "Less than 30 minutes",
    "1_2_hours": "1–2 hours",
    "3plus_hours": "3+ hours / Extensive peer proof needed",
    
    // Q7 options
    full_trust: "Fully trust algorithm based on vibe",
    see_profiles: "Want to see profiles first",
    known_people: "Only travel with people I already know",
    
    // Q9 options
    yes_skills: "Yes, prioritize learning and local life",
    no_landmarks: "No, still prioritize famous landmarks",
    
    // Q11 options
    yes_vibrant: "Yes, feels vibrant and modern",
    no_artificial: "No, feels too digital or artificial",
    
    // Q12 options
    helps_focus: "Helps me focus; feels premium",
    cluttered: "Feels cluttered/distracting",
    
    // Q14 options
    like_tribe: "I like 'Tribe'",
    prefer_other: "Prefer different name",
    
    // Q15 options
    essential: "Essential; won't book without it",
    important: "Important, but not deciding factor",
    not_important: "Not very important",
    
    // Q16 options
    bathrooms_beds: "Exact number of bathrooms/beds",
    amenities: "Specific amenities (Wi-Fi, kitchen)",
    safety_ratings: "Neighborhood safety ratings",
    video_tour: "Verified video tour",
    beds_baths: "Exact number of beds and bathrooms",
    safety_reviews: "Verified safety reviews from ROVE",
    
    // Q17 options
    yes_share: "Yes, happy to share experience",
    no_private: "No, prefer to stay private",
    
    // Quantitative specific
    under_18: "Under 18",
    "18_22": "18 – 22",
    "23_27": "23 – 27",
    "28_plus": "28+",
    student: "Student",
    gap_year: "Gap-Year Traveler",
    professional_nomad: "Young Professional / Digital Nomad",
    yes_frequently: "Yes, frequently",
    sometimes: "Sometimes",
    no_never: "No, never",
    bad_company: "Being stuck with bad company/mismatched personalities",
    safety_concerns: "Safety concerns when traveling alone",
    tourist_trap: "Experiences feeling like a tourist trap",
    rigid_schedules: "Rigid schedules without personal time",
    low_energy: "Low Energy: wellness, meditation, quiet cafes",
    mid_energy: "Mid Energy: coworking and exploring local food",
    high_energy: "High Energy: intensive sports/adventure",
    skill_immersion: "Professional/Skill Immersion",
    remote_work: "Remote Work Evaluation",
    niche_interest: "Intensive Niche Interest",
    curated_community: "Curated Community",
    vocational: "Vocational (Barista Training, Digital Nomad Week)",
    wellness: "Wellness (Silent Meditation)",
    adventure: "Adventure (Surf & Skate Camp)",
    rating: "Hospitality/hostility rating",
    local_spots: "Host's favorite local spots",
    video_intro: "Video introduction",
    pets: "Information on pets",
    gyms: "Local Gyms / Fitness Centers",
    salons: "Nail Salons / Grooming",
    coffee_food: "Specialty Coffee / Food spots",
    coworking: "Co-working spaces",
    very_important: "Very important; use local words",
    somewhat_important: "Somewhat important; a mix is fine",
    
    // Feature ranking values
    video_booking: "Video-to-Booking",
    vibe_matching: "Vibe Matching",
    kindred_hosting: "Kindred Hosting",
    host_transparency: "Host Transparency",
    deep_profiling: "Deep Profiling",
    multi_language: "Multi-Language Support"
};

// Current response being viewed
let currentResponseType = null;
let currentResponseId = null;
let responsesCache = {
    empathy: [],
    quantitative: []
};

// ===== Tab Navigation =====
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabs = document.querySelectorAll('.responses-tab');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.dataset.tab;

            tabBtns.forEach(b => b.classList.remove('active'));
            tabs.forEach(t => t.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(`${tabName}-responses`).classList.add('active');
        });
    });
}

// ===== Load Stats =====
async function loadStats() {
    try {
        const response = await fetch('/api/stats', {
            credentials: 'same-origin'
        });
        const data = await response.json();

        document.getElementById('empathy-count').textContent = data.empathy;
        document.getElementById('quant-count').textContent = data.quantitative;
        document.getElementById('total-count').textContent = data.total;
    } catch (error) {
        console.error('Failed to load stats:', error);
    }
}

// ===== Load Responses =====
async function loadResponses() {
    await Promise.all([
        loadEmpathyResponses(),
        loadQuantitativeResponses()
    ]);
}

async function loadEmpathyResponses() {
    const container = document.getElementById('empathy-list');
    
    try {
        const response = await fetch('/api/survey/empathy', {
            credentials: 'same-origin'
        });
        
        // Check if response is OK (status 200-299)
        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }
        
        const responses = await response.json();
        
        // Ensure it's an array
        if (!Array.isArray(responses)) {
            throw new Error('Invalid response format');
        }
        
        responsesCache.empathy = responses;

        if (responses.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📭</div>
                    <p>No empathy questionnaire responses yet.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = responses.map(resp => `
            <div class="response-card" onclick="viewResponse('empathy', '${resp.id}')">
                <div class="response-card-header">
                    <span class="response-id">#${resp.id.split('_')[1]}</span>
                    <span class="response-date">${formatDate(resp.timestamp)}</span>
                </div>
                <div class="response-preview">
                    ${getPreview(resp, 'empathy')}
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Load empathy responses error:', error);
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">⚠️</div>
                <p>Failed to load responses.</p>
            </div>
        `;
    }
}

async function loadQuantitativeResponses() {
    const container = document.getElementById('quant-list');
    
    try {
        const response = await fetch('/api/survey/quantitative', {
            credentials: 'same-origin'
        });
        
        // Check if response is OK (status 200-299)
        if (!response.ok) {
            throw new Error(`Server returned ${response.status}`);
        }
        
        const responses = await response.json();
        
        // Ensure it's an array
        if (!Array.isArray(responses)) {
            throw new Error('Invalid response format');
        }
        
        responsesCache.quantitative = responses;

        if (responses.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📭</div>
                    <p>No quantitative survey responses yet.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = responses.map(resp => `
            <div class="response-card" onclick="viewResponse('quantitative', '${resp.id}')">
                <div class="response-card-header">
                    <span class="response-id">#${resp.id.split('_')[1]}</span>
                    <span class="response-date">${formatDate(resp.timestamp)}</span>
                </div>
                <div class="response-preview">
                    ${getPreview(resp, 'quantitative')}
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error('Load quantitative responses error:', error);
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">⚠️</div>
                <p>Failed to load responses.</p>
            </div>
        `;
    }
}

function getPreview(response, type) {
    if (type === 'empathy') {
        const sources = response.responses.e_q1;
        const sourcesText = Array.isArray(sources) 
            ? sources.map(s => valueLabels[s] || s).join(', ')
            : (valueLabels[sources] || sources || 'Not specified');
        return `Travel inspiration: ${sourcesText}`;
    } else {
        const email = response.responses.q_q1 || 'No email';
        const age = valueLabels[response.responses.q_q2] || 'Age not specified';
        return `${email} · ${age}`;
    }
}

// ===== View Response =====
function viewResponse(type, id) {
    const responses = responsesCache[type];
    const response = responses.find(r => r.id === id);

    if (!response) return;

    currentResponseType = type;
    currentResponseId = id;

    const questions = type === 'empathy' ? empathyQuestions : quantitativeQuestions;
    const modalBody = document.getElementById('modal-body');

    let html = `
        <div class="response-detail-item">
            <div class="response-detail-label">Response ID</div>
            <div class="response-detail-value">${response.id}</div>
        </div>
        <div class="response-detail-item">
            <div class="response-detail-label">Submitted</div>
            <div class="response-detail-value">${formatDate(response.timestamp, true)}</div>
        </div>
    `;

    for (const [key, question] of Object.entries(questions)) {
        let value = response.responses[key];
        
        if (value === undefined || value === '') continue;

        // Format the value
        let formattedValue;
        
        if (key.includes('ranking')) {
            // Handle ranking
            formattedValue = value.map(item => 
                `<div style="padding: 4px 0;">${item.rank}. ${valueLabels[item.value] || item.value}</div>`
            ).join('');
        } else if (Array.isArray(value)) {
            // Multiple selection
            formattedValue = value.map(v => valueLabels[v] || v).join(', ');
        } else {
            // Single value
            formattedValue = valueLabels[value] || value;
        }

        html += `
            <div class="response-detail-item">
                <div class="response-detail-label">${question}</div>
                <div class="response-detail-value">${formattedValue}</div>
            </div>
        `;
    }

    modalBody.innerHTML = html;
    document.getElementById('response-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('response-modal').classList.add('hidden');
    currentResponseType = null;
    currentResponseId = null;
}

async function deleteCurrentResponse() {
    if (!currentResponseType || !currentResponseId) return;

    if (confirm('Are you sure you want to delete this response?')) {
        try {
            await fetch(`/api/survey/${currentResponseType}/${currentResponseId}`, {
                method: 'DELETE',
                credentials: 'same-origin'
            });
            closeModal();
            loadStats();
            loadResponses();
        } catch (error) {
            alert('Failed to delete response.');
        }
    }
}

// ===== Export Data =====
function exportData(type) {
    const responses = responsesCache[type];
    
    if (responses.length === 0) {
        alert('No responses to export.');
        return;
    }

    const questions = type === 'empathy' ? empathyQuestions : quantitativeQuestions;
    
    // Build CSV headers
    const headers = ['Response ID', 'Timestamp', ...Object.values(questions)];
    
    // Build CSV rows
    const rows = responses.map(response => {
        const row = [
            response.id,
            response.timestamp,
            ...Object.keys(questions).map(key => {
                let value = response.responses[key];
                
                if (value === undefined) return '';
                
                if (key.includes('ranking')) {
                    return value.map(item => `${item.rank}:${item.value}`).join('; ');
                } else if (Array.isArray(value)) {
                    return value.join('; ');
                }
                
                return value;
            })
        ];
        
        return row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',');
    });

    const csv = [headers.map(h => `"${h}"`).join(','), ...rows].join('\n');
    
    // Download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `rove_${type}_responses_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
}

// ===== Clear Data =====
async function clearData(type) {
    const count = responsesCache[type].length;
    
    if (count === 0) {
        alert('No responses to clear.');
        return;
    }

    if (confirm(`Are you sure you want to delete all ${count} ${type} responses? This cannot be undone.`)) {
        try {
            await fetch(`/api/survey/${type}`, { method: 'DELETE', credentials: 'same-origin' });
            loadStats();
            loadResponses();
        } catch (error) {
            alert('Failed to clear responses.');
        }
    }
}

// ===== Utility Functions =====
function formatDate(timestamp, full = false) {
    const date = new Date(timestamp);
    
    if (full) {
        return date.toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
    
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
