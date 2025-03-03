const API_URL = 'https://notes-api.dicoding.dev/v2/notes';

async function fetchNotes() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.notes;
}

async function addNote(note) {
    try {
        const response = await fetch(API_URL, {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    });
        return response.json();
    } catch (error) {
        console.error('Error adding note:', error);
    }

}

async function deleteNote(noteId) {
    await fetch(`${API_URL}/${noteId}`, {
        method: 'DELETE',
    });
}
