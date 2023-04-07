class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2022
        Rivero Medel Ana Lilia.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
