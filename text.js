class Text extends HTMLHeadingElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({mode: 'open'})
    this._addTemplate()
  }

  connectedCallback() {
    this._initialColor()
    this.addEventListener('click', function(event) {
      if(confirm('Do you want to toggle colors?')){
        let parentColor = this._toggleColors()
        const changeColorEvent = new CustomEvent('change-colors', {bubbles: true, detail: {color: parentColor}})
        this.dispatchEvent(changeColorEvent)
      }
    }.bind(this))
  }

  changeColor(color) {
    this.style.color = color
  }

  _addTemplate() {
    this.shadowRoot.innerHTML=`
    <style>
      :host{
        padding: 1em;
        font-size: 4em;
      }
    </style>
    <slot></slot>
    `
  }

  _toggleColors() {
    if(this.style.color == 'red'){
      this.style.color = 'black'
      return 'red'
    }else{
      this.style.color = 'red'
      return 'black'
    }
  }

  _initialColor() {
    this.style.color = 'red'
  }
}

customElements.define('wm-text', Text, { extends: 'h1' })
