import {customComponents, mix, Input} from "../../simplicity.js";
import {loader} from "../../processors/loader-processor.js";
import EditorToolbar from "./mat-editor/editor-toolbar.js";
import DomForm from "../../directives/dom-form.js";
import {contextManager} from "../../manager/context-manager.js";

class MatEditor extends mix(HTMLElement).with(Input) {

    name;

    model = {
        html: "",
        text: ""
    };

    contents;
    placeholder;

    initialize() {
        this.contents.addEventListener("input", () => {
            this.model.html = this.contents.innerHTML;
            this.model.text = this.contents.innerText
            this.dispatchEvent(new Event("model"));
        });

        let element = this.querySelector("div.content");
        if (element.innerHTML !== this.model.html) {
            element.innerHTML = this.model.html;
        }

        if (this.name) {
            let domForm = this.queryUpwards((element) => {
                return element instanceof DomForm
            });
            if (domForm) {
                domForm.register(this);
            }
        }
    }

    contextmenuClick(event) {
        event.stopPropagation();
        event.preventDefault();

        let content = this.querySelector("div.content");
        let newPath = [];
        for (const segment of event.path) {
            if (segment === content) {
                break
            }
            newPath.push(segment);
        }

        contextManager.openContext("/sysc/scripts/components/form/mat-editor/context-menu", {
            pageX : event.pageX,
            pageY : event.pageY,
            data: {
                path: newPath
            }
        })
        return false;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "model" : {
                this.model = newValue;
            }
                break
            case "placeholder" : {
                this.placeholder = newValue;
            }
                break
            case "name" : {
                this.name = newValue;
            }
        }
    }

    static get components() {
        return [EditorToolbar]
    }

    static get observedAttributes() {
        return [
            {
                name: "model",
                type: "two-way"
            },
            {
                name: "placeholder",
                type: "input"
            },
            {
                name : "name",
                type : "input"
            }
        ]
    }

    static get template() {
        return loader("sysc/scripts/components/form/mat-editor.html")
    }
}

export default customComponents.define("mat-editor", MatEditor)