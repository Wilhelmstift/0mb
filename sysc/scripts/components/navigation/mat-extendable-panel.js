import {customComponents} from "../../simplicity.js";
import {loader} from "../../processors/loader-processor.js";

class MatExtendablePanel extends HTMLElement {

    open = false;

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "open" : {
                this.open = newValue;
            }
        }
    }

    static get observedAttributes() {
        return [{
            name : "open",
            type : "input"
        }]
    }

    static get components() {
        return [];
    }

    static get template() {
        return loader("/sysc/scripts/components/navigation/mat-extendable-panel.html")
    }

}

export default customComponents.define("mat-extendable-panel", MatExtendablePanel)