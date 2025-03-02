class NoteItem extends HTMLElement {
    set note(data) {
        this.innerHTML = `
            <div class="note-item">
                <h3>${data.title}</h3>
                <p>${data.body}</p>
                <small>${new Date(data.createdAt).toLocaleDateString()}</small>
            </div>
        `;
    }
}

customElements.define('note-item', NoteItem);
