import {customComponents} from "./simplicity.js";
import {loader} from "./processors/loader-processor.js";
import KkhHeader from "./kkh/kkh-header.js";

class KKHWilhelmstift extends HTMLElement{
    static get components(){
        return [KkhHeader];
    }
    static get template(){

        return loader("/sysc/components/kkh-wilhelmstift.html") ;
    }
}
export default customComponents.define("kkh-wilhelmstift",KKHWilhelmstift);