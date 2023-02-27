import {App} from "vue";
import {MarqueeText} from "./components";

export default {
    install: (app: App, options: any) => {
        app.component("MarqueeText", MarqueeText);
    }
}