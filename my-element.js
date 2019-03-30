import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

class myElement extends PolymerElement {
  static get template () {
    return html`
                <style>
                  :host {
                    color: red;
                  }
                </style>
                
                <h2>[[_message()]]</h2>
`
  }
  
  _message () {
    return 'Yo!!'
  }
}

customElements.define('my-element', myElement)
