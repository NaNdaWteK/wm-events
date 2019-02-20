class Background extends HTMLDivElement {

  static get observedAttributes() { return ['togglecolor']; }

  constructor() {
    super()
    const shadowRoot = this.attachShadow({mode: 'open'});
    this._addTemplate()
  }

  connectedCallback() {
    this._listenChildEvent()
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(this.getAttribute('togglecolor') && this.querySelector('h1')){
      this._toggleColors(newValue, oldValue)
    }
  }

  _addTemplate() {
    this.shadowRoot.innerHTML=`
    <style>
      :host{
        background-color: black;
      }
    </style>
    <slot></slot>
    `
  }

  _listenChildEvent() {
    this.shadowRoot.addEventListener('change-colors', function(event) {
      console.log('Child fires an event listened by parent')
      this._toggleColor(event.detail.color)
    }.bind(this))
  }

  _toggleColor(color) {
    this.style.backgroundColor = color
    this._updateAttr(color)
  }

  _toggleColors(ownColor, childColor) {
    this.querySelector('h1').changeColor(childColor)
    this._setBackgroundTo(ownColor)
  }

  _setBackgroundTo(color){
    this.style.backgroundColor = color
  }

  _updateAttr(color) {
    this.setAttribute('togglecolor', color)
  }
}

customElements.define('wm-background', Background, { extends: 'div' })
