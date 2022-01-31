import {loader} from "../processors/loader-processor.js";
import {customComponents} from "../simplicity.js";

class KkhNavIntroductionPoint extends HTMLElement{
    kkh_title = null;
    kkh_link = null;
    static get components(){
        return [];
    }
    static get template() {
        return loader("/sysc/components/kkh-nav-introduction-point.html");
    }
    static get observedAttributes(){
        return [{name:"kkh-title",type:"input"},{name:"kkh-link",type:"input"}];
    }
    attributeChangedCallback(name,oldValue,newValue){
        switch(name){
            case "kkh-title": this.kkh_title = (newValue); break;
            case "kkh-link": this.kkh_link = (newValue); break;
        }
    }
}
export default customComponents.define("kkh-nav-introduction-point",KkhNavIntroductionPoint)