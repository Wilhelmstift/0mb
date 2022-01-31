import MatExtendablePanel from "../components/navigation/mat-extendable-panel.js";
import {loader} from "../processors/loader-processor.js";
import {customComponents} from "../simplicity.js";

class KkhMain extends HTMLElement{
    static get components() {
        return [];
    }
    static get template(){
        return loader("/sysc/components/kkh-main.html");
    }
}
export default customComponents.define("kkh-main",KkhMain);