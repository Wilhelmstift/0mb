import {customComponents} from "../../simplicity.js";
import {loader} from "../../processors/loader-processor.js";

class MatModal extends HTMLElement {
    static get components() {
        return []
    }

    static get template() {
        return loader("sysc/scripts/components/modal/mat-modal.html")
    }
}

export default customComponents.define("mat-modal", MatModal)