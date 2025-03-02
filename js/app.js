function renderNotes() {
    const container = document.getElementById('notes-container');
    container.innerHTML = '';
    notesData.forEach(note => {
        const noteElement = document.createElement('note-item');
        noteElement.note = note;
        container.appendChild(noteElement);
    });
}

renderNotes();
