import {customComponents} from "../simplicity.js";
import {loader} from "../processors/loader-processor.js";

class KKHTeaserStageSlide extends HTMLElement{
    kkh_imageUrl = null;
    kkh_title  = null;
    kkh_description = null;
    kkh_link = null;
    kkh_button = null;
    static get components(){
        return [];
    }
    static get template() {
        return loader("/sysc/components/kkh-teaserStageSlide.html");
    }
    static get observedAttributes(){
        return [{name:"kkh-title",type:"input"},{name:"kkh-text",type:"input"},{name:"kkh-link",type:"input"},{name:"kkh-image-url",type:"input"},{name:"kkh-button",type:"input"}];
    }
    attributeChangedCallback(name,oldValue,newValue){
        switch(name){
            case "kkh-title": this.kkh_title = (newValue); break;
            case "kkh-text": this.kkh_description = (newValue); break;
            case "kkh-link": this.kkh_link = (newValue); break;
            case "kkh-image-url": this.kkh_imageUrl = (newValue); break;
            case "kkh-button": this.kkh_button = (newValue); break;
        }
    }

}
export default customComponents.define("kkh-teaser-state-slide",KKHTeaserStageSlide);