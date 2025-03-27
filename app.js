// Sample data for remedies (this could later be dynamically loaded from Google Sheets)
const remedies = {
    "headache": ["Peppermint tea", "Lavender essential oil", "Hydrate with water"],
    "cough": ["Honey and lemon", "Ginger tea", "Warm saltwater gargle"]
};

// Handle form submission
document.getElementById('symptom-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const symptom = document.getElementById('symptom').value.toLowerCase();
    const suggestions = remedies[symptom];
    
    const remedyDiv = document.getElementById('remedy-suggestions');
    
    // Clear any previous suggestions
    remedyDiv.innerHTML = '';
    
    if (suggestions) {
        const ul = document.createElement('ul');
        suggestions.forEach(remedy => {
            const li = document.createElement('li');
            li.textContent = remedy;
            ul.appendChild(li);
        });
        remedyDiv.appendChild(ul);
    } else {
        remedyDiv.innerHTML = '<p>No remedies found for this symptom. Please try again.</p>';
    }
});
