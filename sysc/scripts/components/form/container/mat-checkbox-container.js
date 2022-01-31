import {customComponents} from "../../../simplicity.js";
import {loader} from "../../../processors/loader-processor.js";

class MatCheckboxContainer extends HTMLElement {

    placeholder = "";

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "placeholder" : {
                this.placeholder = newValue;
            }
        }
    }

    static get components() {
        return []
    }

    static get observedAttributes() {
        return [{
            name: "placeholder",
            type: "input"
        }];
    }

    static get template() {
        return loader("sysc/scripts/components/form/container/mat-checkbox-container.html")
    }

}

export default customComponents.define("mat-checkbox-container", MatCheckboxContainer)