import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {MarqueeText} from "./components";

const app = createApp(App);

app.component("MarqueeText", MarqueeText);
app.mount('#app')
