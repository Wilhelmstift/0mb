import {loader} from "../processors/loader-processor.js";
import {customComponents} from "../simplicity.js";

class KkhHeader extends HTMLElement {
    logoUrl = null;
    attributeChangedCallback(name,oldValue,newValue){
        switch(name){
            case "logo": this.logoUrl = (newValue);
        }
    }
    static get components(){
        return [];
    }
    static get template(){
        return loader("/sysc/components/kkh-header.html");
    }
    static get observedAttributes(){
        return [{name:"logo",type:"input"}];
    }
}
export default customComponents.define("kkh-header",KkhHeader);