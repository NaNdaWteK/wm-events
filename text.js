class Text extends HTMLHeadingElement {
  constructor() {
    super()
    const shadowRoot = this.attachShadow({mode: 'open'})
    this._addTemplate()
  }


  connectedCallback() {
    console.log('connected callback function text')

    this.addEventListener('click', function(event) {
      if(confirm('Do you want to toggle colors?')){
        this._toggleColors()
        const changeColorEvent = new Event('change-colors', {bubbles: true})
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
        color:red;
        padding: 1em;
        font-size: 4em;
      }
    </style>
    <slot></slot>
    `
  }

  _toggleColors() {
    if(this.style.color == 'red' || this.style.color == ''){
      this.style.color = 'black'
    }else{
      this.style.color = 'red'
    }
  }
}

customElements.define('wm-text', Text, { extends: 'h1' })
