import KKHTeaserStageSlide from "./kkh-teaserStageSlide.js";
import {loader} from "../processors/loader-processor.js";
import {contentManager} from "../manager/content-manager.js";
import {customComponents} from "../simplicity.js";

class KkhNavIntroduction extends HTMLElement{
    static get components(){
        return [];
    }
    static get template() {
        return loader("/sysc/components/kkh-nav-introduction.html");
    }
    get navpoints() {
        let container = contentManager.instance(this);
        return Array.from(container.querySelectorAll("kkh-nav-introduction-point"))
    }
}
export default customComponents.define("kkh-nav-introduction",KkhNavIntroduction);