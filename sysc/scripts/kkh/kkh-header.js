import {loader} from "../processors/loader-processor.js";
import {customComponents} from "../simplicity.js";
import MatExtendablePanel from "../components/navigation/mat-extendable-panel.js";

class KkhHeader extends HTMLElement {
    logoUrl = null;
    open = false;

    attributeChangedCallback(name,oldValue,newValue){
        switch(name){
            case "logo": this.logoUrl = (newValue); break;
        }
    }
    static get components(){
        return [MatExtendablePanel]; //TDO: Fix it with origin KKH-Wilhelmstit code or Punch Mark Brede into the Faace ;-)
    }
    static get template(){
        return loader("/sysc/components/kkh-header.html");
    }
    static get observedAttributes(){
        return [{name:"logo",type:"input"}];
    }
}
export default customComponents.define("kkh-header",KkhHeader);