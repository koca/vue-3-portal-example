import { createApp } from "./vue.esm-browser";
import Twitter from "./twitter"; // @imesutkoca

const Example = {
  setup() {
    return {
      count: 0
    };
  },
  template: `
    <div>
      <p>increment count inside of popup</p>
      <button @click="count++">increment</button>
      <Portal target="#popup-target">
         <div class="popup">
           <h4> Popup </h4>
           <p>im inside of #popup-target element not in #app.</p>
           <p>open devtools to check.</p>
           count: {{ count }}
         </div>
      </Portal>
    </div>
  `
};

const App = {
  components: {
    Example
  },

  template: `
    <h1>Vue 3 - Portal Example </h1>
    <Example />
    
    <Twitter />
  `
};

var app = createApp();
app.component("Twitter", Twitter);
app.mount(App, "#app");
