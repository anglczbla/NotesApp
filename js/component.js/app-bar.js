class AppBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h1>Bookshelf App</h1>`;
    }
}

customElements.define('app-bar', AppBar);
