import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.title = "Your History!";
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "This is History page";
    }
}