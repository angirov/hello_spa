import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.title = "Welcome to Pong!";
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "This is welcome page";
    }
}