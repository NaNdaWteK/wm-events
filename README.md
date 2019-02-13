# Vanilla Confirm Link Web Component

Estos web components customizados están hechos con javascript vanilla para entender el flujo de eventos de los web components

## Requerimientos

1. Cargar background.js y text.js
2. Crea los web components con el atributo `is="wm-background" y is="wm-text"`

### background.js

1. connectedCallback() en esta función estamos escuchando un evento que se lanza desde el web component anidado para reaccionar a el
2. attributeChangedCallback() en esta funcion escuchamos un cambio de el exterior, que bien podría ser un componente lógico para reaccionar a el, y relalizamos los cambios necesarios en todo el árbol de web components.
Esta función necesita de la funcion observedAttributes() donde definimos que atributos estamos escuchando.

### text.js

1. connectedCallback() en esta funcion hacemos creamos un evento para lanzarlo por el árbol del dom y como vemos llega incluso al index.html

#### Nota mental

La primera función del ciclo de vida es attributeChangedCallback siempre que este, esté seteado.

[View Demo](https://nandawtek.github.io/wm-events/)

**Bon apetit...**
