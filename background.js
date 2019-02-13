class Background extends HTMLDivElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({mode: 'open'});
    this._addTemplate()
  }
  
  connectedCallback() {
    console.log('connected callback function bacground')
    this.shadowRoot.addEventListener('change-colors', function() {
      this._toggleColors()
    }.bind(this))
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attribute changed callback function bacground')
    if(oldValue == null){ oldValue = 'black' }
    if(this.getAttribute('togglecolor')){
      this.querySelector('h1').changeColor(oldValue)
      this.style.backgroundColor = newValue
    }

  }

  static get observedAttributes() { return ['togglecolor']; }

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

  _toggleColors() {
    if(this.style.backgroundColor == 'red'){
      this.style.backgroundColor = 'black'
    }else{
      this.style.backgroundColor = 'red'
    }
  }
}

customElements.define('wm-background', Background, { extends: 'div' })
