class ImageFigure extends HTMLElement {
    constructor() {
        super();
        console.log("constructed");
    }

    connectedCallback() {
        console.log("connected");
    }

    disconncetedCallback() {
        console.log("disconnected");
    }

    adoptedCallback() {
        console.log("adopted callback");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} changed`);
    }

    static get observedAttributes() {
        return ["caption"];
    }

}

customElements.define("image-figure", ImageFigure);