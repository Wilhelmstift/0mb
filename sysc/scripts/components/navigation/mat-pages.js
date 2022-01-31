import {customComponents} from "../../simplicity.js";
import {loader} from "../../processors/loader-processor.js";

class MatPages extends HTMLElement {

    page = 0;

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "page" : {
                this.page = newValue;
            }
        }
    }

    static get observedAttributes() {
        return [
            {
                name: "page",
                type: "input"
            }
        ]
    }

    static get components() {
        return [];
    }

    static get template() {
        return loader("sysc/scripts/components/navigation/mat-pages.html");
    }
}

export default customComponents.define("mat-pages", MatPages);