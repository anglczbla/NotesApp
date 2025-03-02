class NoteForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <form id="note-form">
                <input type="text" id="title" placeholder="Judul" required>
                <textarea id="body" placeholder="Isi catatan" required></textarea>
                <button type="submit">Tambah Catatan</button>
            </form>
        `;
        this.querySelector('#note-form').addEventListener('submit', this.addNote);
    }

    addNote(event) {
        event.preventDefault();
        const title = document.querySelector('#title').value;
        const body = document.querySelector('#body').value;
        const note = { 
            id: Date.now(), 
            title, 
            body, 
            createdAt: new Date().toISOString(), 
            archived: false 
        };
        notesData.push(note);
        renderNotes();
    }
}

customElements.define('note-form', NoteForm);
