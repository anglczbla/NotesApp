class NoteItem extends HTMLElement {
    set note(data) {
        this.innerHTML = `
            <div class="note-item">
                <h3>${data.title}</h3>
                <button class="delete-button">Delete</button>
                <p>${data.body}</p>
                <small>${new Date(data.createdAt).toLocaleDateString()}</small>
            </div>
        `;

        this.querySelector('.delete-button').addEventListener('click', () => {
            deleteNote(data.id);
            renderNotes();
        });
    }
}

customElements.define('note-item', NoteItem);
