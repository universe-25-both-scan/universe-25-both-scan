// CONFIGURATION
// Point this to your backend folder
const API_BASE = "https://theonsite.cloud/universe_api/"; 

// --- SHARED FUNCTIONS ---
async function apiCall(endpoint, formData) {
    try {
        const response = await fetch(`${API_BASE}/${endpoint}`, {
            method: 'POST',
            body: formData
        });
        return await response.json();
    } catch (error) {
        console.error("API Error:", error);
        return { status: "error", message: "Cannot connect to server." };
    }
}