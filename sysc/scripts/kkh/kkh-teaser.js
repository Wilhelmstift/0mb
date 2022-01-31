import {loader} from "../processors/loader-processor.js";
import {customComponents} from "../simplicity.js";
import {contentManager} from "../manager/content-manager.js";
import KKHTeaserStageSlide from "./kkh-teaserStageSlide.js";

class KkhTeaser extends HTMLElement {
    static get components(){
        return [KKHTeaserStageSlide];
    }
    static get template() {
        return loader("/sysc/components/kkh-teaser.html");
    }
    get slides() {
        let container = contentManager.instance(this);
        return Array.from(container.querySelectorAll("kkh-teaser-state-slide"))
    }
}
export default customComponents.define("kkh-teaser",KkhTeaser);