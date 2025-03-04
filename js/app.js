async function renderNotes() {
    const container = document.getElementById('notes-container');
    container.innerHTML = '';

    // Show loading indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.textContent = 'Loading...';
    container.appendChild(loadingIndicator);

    const notes = await fetchNotes();
    notes.forEach(note => {
        const noteElement = document.createElement('note-item');
        noteElement.note = note;
        container.appendChild(noteElement);
    });

    // Remove loading indicator
    container.removeChild(loadingIndicator);
}

renderNotes();
