import {customComponents} from "./simplicity.js";
import {loader} from "./processors/loader-processor.js";
import KkhHeader from "./kkh/kkh-header.js";
import KkhTeaser from "./kkh/kkh-teaser.js";
import KKHTeaserStageSlide from "./kkh/kkh-teaserStageSlide.js";
import KkhNavIntroduction from "./kkh/kkh-nav-introduction.js";
import KkhNavIntroductionPoint from "./kkh/kkh-nav-introduction-point.js";

class KKHWilhelmstift extends HTMLElement{
    static get components(){
        return [KkhHeader,KkhTeaser,KKHTeaserStageSlide,KkhNavIntroduction,KkhNavIntroductionPoint];
    }
    static get template(){

        return loader("/sysc/components/kkh-wilhelmstift.html") ;
    }
}
export default customComponents.define("kkh-wilhelmstift",KKHWilhelmstift);