import { createWidget } from 'discourse/widgets/widget';
import RawHtml from "discourse/widgets/raw-html";

let layouts;

try {
  layouts = requirejs('discourse/plugins/discourse-layouts/discourse/lib/layouts');
} catch(error) {
  layouts = { createLayoutsWidget: createWidget };
  console.warn(error);
}

createWidget('floating-footer-hamburger', {
  tagName: 'button',
  buildKey: () => 'my-widget',

  defaultState() {
    return {  };
  },

  html(attrs, state) {
    return new RawHtml(
      { html: `<button id="tog" class="responsive-toggle left btn no-text ember-view" type="button">
        <img src="https://thepavilion.io/uploads/default/original/2X/d/d76070707333dee1c248c0f47e3fb0e2329404ec.png"
        class="image-icon"></img></button>` 
      }
    );
  },

  click() {
    this.appEvents.trigger('sidebar:toggle', {side: 'left'});
  }
});