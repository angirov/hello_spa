import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.title = "Play Pong!";
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "This is Play page";
    }
}