// assets/script.js

// Function to filter timeline events by year and category
function filterTimelineEvents(events, year, category) {
    return events.filter(event => {
        const eventYear = new Date(event.date).getFullYear();
        return eventYear === year && event.category === category;
    });
}

// Search functionality
function searchEvents(events, searchTerm) {
    return events.filter(event => event.title.toLowerCase().includes(searchTerm.toLowerCase()));
}

// Interactive relationship diagram rendering using Mermaid.js
function renderRelationshipDiagram(data) {
    const graphDefinition = `
        graph TD;
        ${data.map(item => `${item.source} --> ${item.target};`).join('\n')}
    `;
    mermaid.render('relationshipDiagram', graphDefinition, (svgCode) => {
        document.getElementById('relationshipDiagramContainer').innerHTML = svgCode;
    });
}

// Example usage
const timelineEvents = [{ title: 'Event 1', date: '2025-01-01', category: 'category1' }, { title: 'Event 2', date: '2026-01-01', category: 'category2' }];

// Filtering events
const filteredEvents = filterTimelineEvents(timelineEvents, 2026, 'category2');
console.log(filteredEvents);

// Searching events
const searchResults = searchEvents(timelineEvents, 'Event');
console.log(searchResults);

// Rendering diagram
renderRelationshipDiagram([{ source: 'A', target: 'B' }, { source: 'A', target: 'C' }]);