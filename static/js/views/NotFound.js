import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.title = "404!";
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "404: page not found";
    }
}